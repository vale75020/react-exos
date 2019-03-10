import React, { Component } from 'react'

export default class Phantom extends Component {
    constructor() {
        super()
        this.state={
            text: ""
        }
    }

    addText = () => {
      // if(this.state.text ==="") {
      //  "this is my phantom text"
      //  })
      // } else { this.setState( {text:""})}
      const nouveauTexte = this.state.text ? "" : "this is my phantom text"
      this.setState({
        text: nouveauTexte })
    }

    // textOut = () => {
    //   this.setState({
    //     text: ""
    //   })
    // }

  render() {
    return (
      <div onMouseOver={this.addText} onMouseOut={this.addText}>
        <h1> Mouse over here </h1>
        <h1 id="hidden">{this.state.text}</h1>
      </div>
    )
  }
}
