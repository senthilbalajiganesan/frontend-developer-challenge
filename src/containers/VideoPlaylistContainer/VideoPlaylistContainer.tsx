import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./VideoPlaylistContainer.scss";
import { IReduxStateModel, IReduxActionModel, IProps } from "./Type";
import { onVideoEndedAction } from "./Action";
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
          playing
          onEnded={() => {
            this.props.onVideoEndedAction(this.props.videoList);
          }}
        />
        {videoList.length === 0 ? (
          <div className="playlist">
            <p>Please start adding Videos</p>
          </div>
        ) : (
          <div className="playlist">
            {videoList.map((video: string, index: number) => (
              <VideoDetail key={index} videoDetail={videoListDetail[video]} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ playerlist }: { playerlist: IReduxStateModel }) => {
  return { ...playerlist };
};
const mapDispatchToProps: IReduxActionModel = { onVideoEndedAction };

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlaylist);
