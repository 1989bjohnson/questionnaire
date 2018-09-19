import React, { Component } from "react";

class Question extends Component {
  state = {};

  render() {
    const questions = [
      {
        title: "Question 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis.",
        path: "/question1",
        order: 0
      },
      {
        title: "Question 2",
        content:
          "Sed dignissim dignissim dolor ac ullamcorper. Morbi laoreet urna non.",
        path: "/question2",
        order: 1
      },
      {
        title: "Question 3",
        content:
          "Nullam malesuada consectetur neque, non aliquet lectus ullamcorper et. Donec.",
        path: "/question3",
        order: 2
      },
      {
        title: "Question 4",
        content:
          "In ornare dui in porttitor placerat. Vestibulum ante ipsum primis.",
        path: "/question4",
        order: 3
      }
    ];

    return (
      <div className="question">
        <h1 className="question-title">{questions[this.props.order].title}</h1>
        <p className="question-content">
          {questions[this.props.order].content}
        </p>
      </div>
    );
  }
}

export default Question;
