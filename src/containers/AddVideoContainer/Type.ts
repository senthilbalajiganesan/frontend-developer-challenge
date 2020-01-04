import { onUrlTextChangeAction } from "./Action";

export const TOGGLE_URL_TEXT_ERROR = "toggle_url_text_error";
export const ON_CHANGE_URL_TEXT = "on_change_url_text";

export interface IReduxStateModel {
  urlText: string;
  isUrlTextError: boolean;
}

export interface IReduxActionModel {
  onUrlTextChangeAction: typeof onUrlTextChangeAction;
}

export type IProps = IReduxStateModel & IReduxActionModel;
