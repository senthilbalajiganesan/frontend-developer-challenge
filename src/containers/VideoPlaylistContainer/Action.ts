import { IVideoDetail } from "components/VideoDetail/Type";
import { ON_ADD_VIDEO, ON_END_VIDEO } from "./Type";

export const onAddVideoAction = (
  videoId: string,
  videoDetail: IVideoDetail | null,
  videoList: string[],
  videoListDetail: { [key: string]: IVideoDetail | null }
) => {
  let newVideoList = videoList.concat([videoId]);
  let newVideoListDetail = { ...videoListDetail };
  newVideoListDetail[videoId] = videoDetail;
  return {
    type: ON_ADD_VIDEO,
    payload: { videoList: newVideoList, videoListDetail: newVideoListDetail }
  };
};

export const onVideoEndedAction = (videoList: string[]) => {
  console.log(videoList);
  videoList.shift();
  let newVideoList = [...videoList];
  console.log(newVideoList);
  console.log(videoList);
  return {
    type: ON_END_VIDEO,
    payload: {
      videoList: newVideoList,
      currentVideo: newVideoList[0] ? newVideoList[0] : ""
    }
  };
};
