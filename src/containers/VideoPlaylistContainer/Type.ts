export interface IVideDetail {
  thumbnail_url: string;
  title: string;
  author_url: string;
  author_name: string;
}

export interface IReduxStateModel {
  videoList: string[];
  videoListDetail: { [key: string]: IVideDetail };
  currentVideo: string;
}

export type IProps = IReduxStateModel;

export const ON_ADD_VIDEO = "on_add_video";
