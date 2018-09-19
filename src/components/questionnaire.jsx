import React, { Component } from "react";
import Question from "./question";
import ProgressBarQuestionnaire from "./ProgressBarQuestionnaire";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = { order: 1, length: 4 };
  }

  state = {};

  handleNext = () => {
    this.setState({
      order: this.state.order + 1,
      percentage: (this.state.order / this.state.length) * 100
    });
    console.log("order during handleNext" + " " + this.state.order);
  };

  handlePrev = () => {
    this.setState({
      order: this.state.order - 1,
      percentage: (this.state.order / this.state.length) * 100
    });
    console.log("order during handlePrev" + " " + this.state.order);
  };

  componentDidUpdate() {
    console.log("order during componentDidUpdate" + " " + this.state.order);
  }

  render() {
    console.log("order during render" + " " + this.state.order);
    return (
      <React.Fragment>
        <ProgressBarQuestionnaire percentage={this.state.percentage} />
        <Router>
          <div className="questions">
            <Route
              path={"/question" + this.state.order}
              exact
              render={() => {
                return (
                  <Question
                    order={this.state.order - 1}
                    length={this.state.length}
                  />
                );
              }}
            />
            <Link to={"/question" + (this.state.order - 1)}>
              <button onClick={this.handlePrev}>Previous</button>
            </Link>
            <Link to={"/question" + (this.state.order + 1)}>
              <button onClick={this.handleNext}>Next</button>
            </Link>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Questionnaire;
