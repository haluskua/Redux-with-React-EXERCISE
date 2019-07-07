import React from "react";
import { connect } from "react-redux";
import { addWombat } from "../actions";
import Operator from "./Operator";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wombat: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.dispatch(addWombat(this.state.wombat));

    this.setState({
      wombat: ""
    });
  }

  render() {
    return (
      <>
        <div>
          <h1>React development has begun!</h1>
          <ul>
            {this.props.wombats.map(wombat => {
              return <li>{wombat}</li>;
            })}
          </ul>

          <form onSubmit={this.handleSubmit.bind(this)}>
            {/* If you use an 'inline' bind, you don't need to bind in the constructor */}
            <input
              type="text"
              name="wombat"
              onChange={this.handleChange.bind(this)}
              value={this.state.wombat}
            />
            <input type="submit" />
          </form>
        </div>
        <div>
          <Operator />
        </div>
      </>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    wombats: reduxState.wombats
  };
}

export default connect(mapReduxStateToProps)(App);
