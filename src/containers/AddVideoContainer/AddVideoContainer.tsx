import React, { Component } from "react";
import "./AddVideoContainer.scss";
import { connect } from "react-redux";
import { IReduxStateModel, IProps } from "./Type";
import { onUrlTextChangeAction } from "./Action";

class AddVideoContainer extends Component<IProps, {}> {
  onChangeText = (event: any) => {
    this.props.onUrlTextChangeAction(event.target.value);
  };
  render() {
    const { urlText, isUrlTextError } = this.props;
    return (
      <div>
        <input value={urlText} onChange={this.onChangeText} />
        {isUrlTextError && <p className="danger">URL is invalid!</p>}
      </div>
    );
  }
}

const mapStateToProps = ({ addVideo }: { addVideo: IReduxStateModel }) => {
  return { ...addVideo };
};

const mapDispatchToProps = {
  onUrlTextChangeAction: onUrlTextChangeAction
};

export default connect(mapStateToProps, mapDispatchToProps)(AddVideoContainer);
