import React, { Component } from 'react'

export default class Hello extends Component {
  render() {
      const date = new Date()
      const hours = date.getHours()
      let timeOfDay
      const cssStyle = {
          backgroundColor: "black",
          padding: "10px"
      }

      if(hours < 12) {
          timeOfDay = "Morning"
          cssStyle.color="lightblue"
      } else if (hours >= 12 && hours < 17) {
          timeOfDay = "Afternoon"
          cssStyle.color="red"
      } else {
          timeOfDay = "Night"
          cssStyle.color="blue"
      } 

    return (
      <div>
        <h1 style={cssStyle} >Good {timeOfDay}</h1>
      </div>
    )
  }
}
