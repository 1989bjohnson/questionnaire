import React, { Component } from "react";
import Question from "./question";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import Route from "react-router-dom/Route";

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = { order: 1, length: null };
  }

  state = {};

  handleNext = () => {
    this.setState({ order: this.state.order + 1 });
  };

  handlePrev = () => {
    this.setState({ order: this.state.order - 1 });
  };

  render() {
    return (
      <Router>
        <div className="questions">
          <ul className="progress-bar" />
          <Route
            path={"/question" + this.state.order}
            exact
            render={() => {
              return (
                <Question
                  order={this.state.order - 1}
                  length={this.componentWillReceiveProps}
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
    );
  }
}

export default Questionnaire;
