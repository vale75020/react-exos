import React, { Component } from 'react';
import Hello from "./components/Hello"
import Name from "./components/Name"
import TodoItem from "./components/TodoItem"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        <Name name="Valentino" />
        <div className="todolist">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    );
  }
}

export default App;
