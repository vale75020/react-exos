import React, { Component } from "react";

class MyComponent extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: true
    };
  }

  toggleLog = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };

  // render() {
  //     let wordDisplay
  //     if (this.state.isLoggedIn === true) {
  //         wordDisplay = "in"
  //     } else { wordDisplay = "out" }
  //     return (
  //         <div>
  //             <button onClick={e=>this.toggleLog()}>Login or Logout</button>
  //             <h1>You are currently logged {wordDisplay}</h1>
  //         </div>
  //     );
  // }
  render() {
     
    return (
      <div>
        <button onClick={e => this.toggleLog()}>Login or Logout</button>
        <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
      </div>
    );
  }
}

export default MyComponent;
