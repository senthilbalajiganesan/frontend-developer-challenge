import { IVideoDetail } from "components/VideoDetail/Type";
import { ON_ADD_VIDEO } from "./Type";

export const onAddVideoAction = (
  videoId: string,
  videoDetail: IVideoDetail | null,
  videoList: string[],
  videoListDetail: { [key: string]: IVideoDetail | null }
) => {
  let newVideoList = [...videoList, videoId];
  let newVideoListDetail = { ...videoListDetail };
  newVideoListDetail[videoId] = videoDetail;
  return {
    type: ON_ADD_VIDEO,
    payload: { videoList: newVideoList, videoListDetail: newVideoListDetail }
  };
};
