import { TOGGLE_URL_TEXT_ERROR, ON_CHANGE_URL_TEXT } from "./Type";
import { validateUrl } from "utils";

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
