import { IReduxStateModel, ON_ADD_VIDEO } from "./Type";

const INITIAL_STATE: IReduxStateModel = {
  videoList: [],
  videoListDetail: {
    XnK5mG5u8Hg: {
      thumbnail_url: "https://i.ytimg.com/vi/XnK5mG5u8Hg/hqdefault.jpg",
      author_url: "https://www.youtube.com/user/voxdotcom",
      author_name: "Vox",
      title: "2019, in 6 minutes"
    }
  },
  currentVideo: "XnK5mG5u8Hg"
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ON_ADD_VIDEO:
      return {
        ...state,
        videoList: action.payload.videoList,
        videoListDetail: action.payload.videoListDetail
      };
    default:
      return state;
  }
};
