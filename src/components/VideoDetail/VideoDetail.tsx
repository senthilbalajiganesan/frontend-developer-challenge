import React from "react";
import { IProps } from "./Type";
import "./VideoDetail.scss";

export default (props: IProps) => {
  const { videoDetail } = props;
  return (
    <div className="video-detail-block">
      <img className="video-detail__image" src={videoDetail.thumbnail_url} />
      <div className="video-detail__detail">
        <h5>{videoDetail.title}</h5>
        <a href={videoDetail.author_url} target="_blank">
          {videoDetail.author_name}
        </a>
      </div>
    </div>
  );
};
