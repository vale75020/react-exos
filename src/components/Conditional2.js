import React, { Component } from 'react'

export default class Conditional2 extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn:  false
        }
    }

    handleClick = () => {
        console.log("it works")
        this.setState({
            isLoggedIn : !this.state.isLoggedIn
        })
    }

  render() {
      let buttonText = this.state.isLoggedIn ? "Log In" : "Log Out"
      let displayText =   this.state.isLoggedIn ? "Logged In" : "Logged Out"  
      return (
      <div>
          <h2>{displayText}</h2>
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    )
  }
}
