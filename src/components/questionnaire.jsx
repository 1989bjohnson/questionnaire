import React, { Component } from "react";
import Question from "./question";
import ProgressBarQuestionnaire from "./ProgressBarQuestionnaire";
import Home from "./home";
import Thanks from "./thanks";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import data from "../data/data.json";

const questions = data.questions.map(questions => ({
  title: questions.title,
  content: questions.content,
  path: questions.path,
  order: questions.order
}));

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 0,
      length: questions.length,
      percentage: 0,
      isHome: true
    };
  }

  handleNext = () => {
    this.setState({
      order: this.state.order + 1,
      percentage: (this.state.percentage += (1 / this.state.length) * 100),
      isHome: false
    });
    console.log("order is " + this.state.order);
  };

  handlePrev = () => {
    this.setState({
      order: this.state.order - 1,
      percentage: (this.state.percentage -= (1 / this.state.length) * 100)
    });
    if (this.state.order == 1) {
      this.setState({ isHome: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ProgressBarQuestionnaire percentage={this.state.percentage} />
        <Router>
          <div className="questions">
            <Route path="/" exact component={Home} />
            <Route path="/thanks" exact component={Thanks} />
            {questions.map(question => {
              return (
                <Route
                  path={question.path}
                  exact
                  render={() => {
                    return <Question question={question} />;
                  }}
                />
              );
            })}
            <Link
              to={
                this.state.order == 1
                  ? "/"
                  : "/question" + (this.state.order - 1)
              }
            >
              <button
                className={this.state.isHome ? "hide" : "prev"}
                onClick={this.handlePrev}
              >
                Previous
              </button>
            </Link>
            <Link to={"/question" + (this.state.order + 1)}>
              <button
                className={
                  this.state.order == this.state.length - 1 ||
                  this.state.order == this.state.length
                    ? "hide"
                    : "next"
                }
                onClick={this.handleNext}
              >
                Next
              </button>
            </Link>
            <Link to={"/thanks"}>
              <button
                className={
                  this.state.order == this.state.length - 1 ? "submit" : "hide"
                }
                onClick={this.handleNext}
              >
                Submit
              </button>
            </Link>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Questionnaire;
