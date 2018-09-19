import React, { Component } from "react";

class Question extends Component {
    state = {};

    render() {

        const { question } = this.props;
        return (
            <div className="question">
                <h1 className="question-title">{question.title}</h1>
                <p className="question-content">
                    {question.content}
                </p>
            </div>
        );
    }
}

export default Question;
