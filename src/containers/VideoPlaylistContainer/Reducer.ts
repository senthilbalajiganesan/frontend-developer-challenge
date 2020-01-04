import { IReduxStateModel } from "./Type";

const INITIAL_STATE: IReduxStateModel = {
  videoList: [
    "XnK5mG5u8Hg",
    "XnK5mG5u8Hg",
    "XnK5mG5u8Hg",
    "XnK5mG5u8Hg",
    "XnK5mG5u8Hg",
    "XnK5mG5u8Hg",
    "XnK5mG5u8Hg",
    "XnK5mG5u8Hg",
    "XnK5mG5u8Hg",
    "XnK5mG5u8Hg",
    "XnK5mG5u8Hg",
    "XnK5mG5u8Hg"
  ],
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
    default:
      return state;
  }
};
