import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Questionnaire from "./components/questionnaire";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Questionnaire />
      </div>
    );
  }
}

export default App;
