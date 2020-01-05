import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./VideoPlaylistContainer.scss";
import { IReduxStateModel, IProps } from "./Type";
import { connect } from "react-redux";
import { YOUTUBE_BASE_URL } from "utils";
import VideoDetail from "components/VideoDetail/VideoDetail";

class VideoPlaylist extends Component<IProps, {}> {
  render() {
    const { videoListDetail, videoList, currentVideo } = this.props;
    return (
      <div className="video-playlist-wrapper">
        <ReactPlayer
          className="video-player"
          url={`${YOUTUBE_BASE_URL}${currentVideo}`}
          controls
          // playing
          onEnded={() => {
            console.log("Video completed running");
          }}
        />
        <div className="playlist">
          {videoList.map((video: string, index: number) => (
            <VideoDetail key={index} videoDetail={videoListDetail[video]} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ playerlist }: { playerlist: IReduxStateModel }) => {
  return { ...playerlist };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlaylist);
