import { onVideoEndedAction } from "./Action";

export interface IVideoDetail {
  thumbnail_url: string;
  title: string;
  author_url: string;
  author_name: string;
}

export interface IReduxStateModel {
  videoList: string[];
  videoListDetail: { [key: string]: IVideoDetail };
  currentVideo: string;
}

export interface IReduxActionModel {
  onVideoEndedAction: typeof onVideoEndedAction;
}

export type IProps = IReduxStateModel & IReduxActionModel;

export const ON_ADD_VIDEO = "on_add_video";
export const ON_END_VIDEO = "on_end_video";
