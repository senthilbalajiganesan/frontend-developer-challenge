import React, { Component } from "react";
import "./AddVideoContainer.scss";
import { connect } from "react-redux";
import { IReduxStateModel, IProps, IReduxActionModel } from "./Type";
import {
  onUrlTextChangeAction,
  toggleUrlErrorAction,
  onAddVideoAction,
  setListenerAction
} from "./Action";
import { Loader, VideoDetail } from "components";

class AddVideoContainer extends Component<IProps, {}> {
  componentDidMount() {
    this.props.setListenerAction();
  }

  onChangeText = (event: any) => {
    this.props.onUrlTextChangeAction(event.target.value);
  };

  handleSubmit = () => {
    this.props.onAddVideoAction(this.props.urlText);
  };

  render() {
    const { urlText, isUrlTextError, isMetaLoading, metaData } = this.props;
    return (
      <div className="add-video-block">
        <input
          placeholder={"Please Enter a valid URL"}
          value={urlText}
          onChange={this.onChangeText}
        />
        {isMetaLoading && <Loader />}
        {metaData && (
          <div>
            <VideoDetail videoDetail={metaData} />
          </div>
        )}
        {isUrlTextError && urlText && <p className="danger">URL is invalid!</p>}
        {!isMetaLoading && !isUrlTextError && urlText && (
          <button onClick={this.handleSubmit} className="btn">
            Add to Queue
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ addVideo }: { addVideo: IReduxStateModel }) => {
  return { ...addVideo };
};

const mapDispatchToProps: IReduxActionModel = {
  onUrlTextChangeAction,
  toggleUrlErrorAction,
  onAddVideoAction,
  setListenerAction
};

export default connect(mapStateToProps, mapDispatchToProps)(AddVideoContainer);
