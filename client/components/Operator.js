import React, { Component } from "react";
// import { connect } from "react-redux";

class Opp extends Component {
  state = {
    age: 21
  };
  onAgeUp = () => {
    this.setState({
      ...this.state,
      age: ++this.state.age
    });
  };

  onAgeDown = () => {
    this.setState({
      ...this.state,
      age: --this.state.age
    });
  };

  render() {
    return (
      <div className="Opp">
        <div className="age_label">
          Age: <span>{this.state.age}</span>
        </div>
        <button onClick={this.onAgeUp}>Age Up</button>
        <button onClick={this.onAgeDown}>Age Down</button>
      </div>
    );
  }
}
export default Opp;
