import React, { Component } from "react";
import Question from "./question";
import ProgressBarQuestionnaire from "./ProgressBarQuestionnaire";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";

class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = { order: 1, length: 4, percentage: 0 };
    }


    handleNext = () => {
        this.setState({
            order: this.state.order + 1,
            //percentage: ((this.state.percentage + 1) / this.state.length) * 100
            percentage: this.state.percentage += (1/this.state.length)*100
        });


        console.log("order during handleNext" + " " + this.state.order);
    };

    handlePrev = () => {
        this.setState({
            order: this.state.order - 1,
            percentage: this.state.percentage -= (1 / this.state.length) *100
        });
        

        console.log("order during handlePrev" + " " + this.state.order);
    };

    componentDidUpdate() {
        console.log("order during componentDidUpdate" + " " + this.state.order);
    }

    render() {
        console.log("order during render" + " " + this.state.order);
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
                    "In ornare dui inasdfasdfs lacerat. Vestibulum ante ipsum primis.",
                path: "/question4",
                order: 3
            }
        ];
        return (
            <React.Fragment>
                <ProgressBarQuestionnaire percentage={this.state.percentage} />
                <Router>
                    <div className="questions">
                        {
                            questions.map((question) => {
                                return <Route
                                    path={question.path}
                                    exact
                                    render={() => {
                                        return (
                                            <Question
                                                question={question}
                                                order={this.state.order - 1}
                                                length={this.state.length}
                                            />
                                        );
                                    }}
                                />
                            })
                        }
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
