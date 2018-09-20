import React, { Component } from "react";
import ProgressBar from "./progressbar";

class ProgressBarQuestionnaire extends Component {
  render() {
    return (
      <div>
        <ProgressBar percentage={this.props.percentage} />
      </div>
    );
  }
}

export default ProgressBarQuestionnaire;
