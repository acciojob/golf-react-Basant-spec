import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, // initially show button
      posi: 0,           // numerical position
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // handle Start button click
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  // handle Right Arrow key press
  handleKeyDown(event) {
    if (event.keyCode === 39) { // 39 = ArrowRight
      this.setState((prevState) => {
        const newPos = prevState.posi + 5;
        return {
          posi: newPos,
          ballPosition: { left: newPos + "px" }
        };
      });
    }
  }

  // add event listener once component mounts
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // cleanup (good practice)
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;
