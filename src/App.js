import React, { Component } from "react";
import Hello from "./components/Hello";
import Name from "./components/Name";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";
import Header from "./components/Header";
import "./App.css";
import MyComponent from "./components/MyComponent";
import EventComponent from "./components/EventComponent";
import Counter from "./components/Counter";
import LifeCycle from "./components/LifeCycle";
import Loading from "./components/Loading";
import Phantom from "./components/Phantom";
import Message from './components/Message'
import Conditional2 from './components/Conditional2'
import Api from './components/Api'


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData // []
    };
  }

  // handleChange = (id) => {
  //   console.log("changed", id)
  // }

  // handleChange = id => {
  //   this.setState(prevState => {
  //     const updatedTodos = prevState.todos.map(todo => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed;
  //       }
  //       return todo;
  //     });
  //     return {
  //       todos: updatedTodos
  //     };
  //   });
  // };

  handleChange = id => {
    let newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div className="App">
        <Header name="Valentino" />
        <MyComponent />
        <div className="todolist">{todoItems}</div>
        <EventComponent />
        <Counter />
        <LifeCycle />
        <Loading />
        <Message />
        <Phantom />
        <Conditional2 />
        <Api />
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
  <TodoItem />
  
   const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)

    return (
      <div className="App">
        <Header name="Valentino" />
        <MyComponent />
        <div className="todolist">
          {todoItems}
        </div>
        <EventComponent />
        <Counter />
        <Hello />
        <Name name="Valentino" />
      </div>
    );
  }
}
*/
