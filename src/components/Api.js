import React, { Component } from "react";

export default class Api extends Component {
  constructor() {
    super();
    this.state = {
  //  loading: false,
      character: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/1") //luke skywalker
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
       // loading: false,
          character: data
        });
      });
  }

  render() {
     
    // const text = this.state.loading ? "Loading..." : this.state.character.name;
    return (
      <div
        style={{ backgroundColor: "black", color: "white", padding: "20px" }}
      >
         {/* <h1>{text}</h1> */}
        <h1 style={{ color: "red" }}>fetching data from API</h1>
        <h3>Name: {this.state.character.name}</h3>
        <h3>Height: {this.state.character.height}</h3>
        <h3>Hair Color: {this.state.character.hair_color}</h3>
        <h3>Skin Color: {this.state.character.skin_color}</h3>
      </div>
    );
  }
}
