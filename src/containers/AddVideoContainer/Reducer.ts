import { ON_CHANGE_URL_TEXT, TOGGLE_URL_TEXT_ERROR, IReduxStateModel } from "./Type";

const INITIAL_STATE: IReduxStateModel = {
  urlText: "",
  isUrlTextError: false
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ON_CHANGE_URL_TEXT:
      return { ...state, urlText: action.payload };
    case TOGGLE_URL_TEXT_ERROR:
      return { ...state, isUrlTextError: action.payload };
    default:
      return state;
  }
};
