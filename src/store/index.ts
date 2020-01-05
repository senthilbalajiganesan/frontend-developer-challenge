import { createStore, applyMiddleware } from "redux";
import reducer from "./rootReducer";
import { tabSync } from "./tabSyncMiddleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  let store = createStore(persistedReducer, {}, applyMiddleware(tabSync));
  let persistor = persistStore(store);
  return { store, persistor };
};
