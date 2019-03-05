import React, { Component } from 'react';
import { truncate } from 'fs';

class MyComponent extends Component {
    constructor() {
        super()

        this.state = {
            isLoggedIn: true
        };
    }

    toggleLog = () => {
        this.setState({
           isLoggedIn : !this.state.isLoggedIn
        })
    }

    render() {
        let wordDisplay
        if (this.state.isLoggedIn === true) {
            wordDisplay = "in"
        } else { wordDisplay = "out" }
        return (
            <div>
                <button onClick={e=>this.toggleLog()}>Login or Logout</button>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        );
    }
}

export default MyComponent;