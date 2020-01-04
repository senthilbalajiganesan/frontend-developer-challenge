import { combineReducers } from "redux";
import PlayerListReducer from "containers/VideoPlaylistContainer/Reducer";

export default combineReducers({
  playerlist: PlayerListReducer
});
