import React, { Component } from 'react';
import Hello from "./components/Hello"
import Name from "./components/Name"
import TodoItem from "./components/TodoItem"
import todosData from './components/todosData'
import Header from "./components/Header"
import './App.css';
import MyComponent from './components/MyComponent';

class App extends Component {
  render() {

    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} />)

    return (
      <div className="App">
        <Header name="Valentino" />
        <MyComponent />
        <div className="todolist">
          {todoItems}
        </div>
        <Hello />
        <Name name="Valentino" />
      </div>
    );
  }
}

export default App;

/*<TodoItem />
  <TodoItem />
  <TodoItem />
  <TodoItem />*/