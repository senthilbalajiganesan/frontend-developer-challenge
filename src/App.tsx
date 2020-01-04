import React from "react";
import { Provider } from "react-redux";
import store from "store";
import "./App.scss";
import { VideoPlaylistContainer, AddVideoContainer } from "containers";
import { init } from "utils";

init();
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <AddVideoContainer />
        <VideoPlaylistContainer />
      </div>
    </Provider>
  );
};

export default App;
