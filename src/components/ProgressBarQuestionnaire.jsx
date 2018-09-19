import React, { Component } from "react";
import ProgressBar from "./progressbar";

class ProgressBarQuestionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0
    };
  }
  render() {
    return (
      <div>
        <ProgressBar percentage={this.props.percentage} />
      </div>
    );
  }
}

export default ProgressBarQuestionnaire;
