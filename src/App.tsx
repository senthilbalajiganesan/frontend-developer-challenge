import React from "react";
import { Provider } from "react-redux";
import store from "store";
import "./App.scss";
import { VideoPlaylistContainer } from "containers";
import { init } from "utils";

init();
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <VideoPlaylistContainer />
      </div>
    </Provider>
  );
};

export default App;
