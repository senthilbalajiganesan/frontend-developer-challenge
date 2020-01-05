import {
  onUrlTextChangeAction,
  toggleUrlErrorAction,
  onAddVideoAction,
  setListenerAction
} from "./Action";

export const TOGGLE_URL_TEXT_ERROR = "toggle_url_text_error";
export const ON_CHANGE_URL_TEXT = "on_change_url_text";
export const ADD_STORAGE_LISTENER = "add_storage_listener";

export interface IReduxStateModel {
  urlText: string;
  isUrlTextError: boolean;
}

export interface IReduxActionModel {
  onUrlTextChangeAction: typeof onUrlTextChangeAction;
  toggleUrlErrorAction: typeof toggleUrlErrorAction;
  onAddVideoAction: typeof onAddVideoAction;
  setListenerAction: typeof setListenerAction;
}

export type IProps = IReduxStateModel & IReduxActionModel;
