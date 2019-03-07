import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    //   this.increment = this.increment.bind(this)  only without arrow functions
  }

  //   increment() {
  //     // console.log("add one")
  //     this.setState(prevState => {
  //       return {
  //         count: prevState.count + 1
  //       };
  //     });
  //   }

  // increment = () => {
  //     console.log("add one")
  //     this.setState(prevState => {
  //       return {
  //         count: prevState.count + 1
  //       };
  //     });
  //   }

  increment = () => {
    // console.log("add one")
    let holdstate = this.state.count;
    this.setState({
      count: holdstate + 1 //this.state.count +1
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Todos Done</button>
      </div>
    );
  }
}

export default Counter;
