import {
  TOGGLE_URL_TEXT_ERROR,
  ON_CHANGE_URL_TEXT,
  ADD_STORAGE_LISTENER
} from "./Type";
import { parseVideoId } from "utils";

export const onUrlTextChangeAction = (text: string) => {
  return {
    type: ON_CHANGE_URL_TEXT,
    payload: text
  };
};

export const toggleUrlErrorAction = (isError: boolean) => {
  return {
    type: TOGGLE_URL_TEXT_ERROR,
    payload: isError
  };
};

export const onAddVideoAction = (url: string) => {
  let videoId = parseVideoId(url);
  if (!videoId) return toggleUrlErrorAction(true);
  return {
    type: "on_video_url_added",
    payload: url
  };
};

export const setListenerAction = () => {
  return {
    type: ADD_STORAGE_LISTENER
  };
};
