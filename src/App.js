import React, { Component } from 'react';
import Hello from "./components/Hello"
import Name from "./components/Name"
import TodoItem from "./components/TodoItem"
import todosData from './components/todosData'
import './App.css';

class App extends Component {
  render() {

    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} />)
    
    return (
      <div className="App">
        <Hello />
        <Name name="Valentino" />
        <div className="todolist">
           {todoItems}
        </div>
      </div>
    );
  }
}

export default App;

        /*<TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />*/