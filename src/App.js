import React, { Component } from 'react';
import logo from './logo.svg';
import TodoForm from './components/todoForm';
import List from './components/list';

import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }
  onNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    /*Push the todos*/
    this.setState({ todos: newTodoList})

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To do App</h1>
        </header>
        <p className="App-intro">
          By Benjamin de Boissieu
          <TodoForm onNewTodo={this.onNewTodo.bind(this)}/>
          <List todos={this.state.todos}/>
        </p>

      </div>
    );
  }
}

export default App;
