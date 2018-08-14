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
  toggleTodoState(todo, index){
    let _todo = todo;
    _todo.done = !todo.done;
    let newTodos = this.state.todos;
    newTodos[index] = _todo;
    this.setState({ todos: newTodos });


  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To do App</h1>
        </header>
        <p className="App-intro">
          By Benjamin de Boissieu </p>
          <TodoForm onNewTodo={this.onNewTodo.bind(this)}/>
          <List todos={this.state.todos}
                onTodoToggle={this.toggleTodoState.bind(this)}/>


      </div>
    );
  }
}

export default App;
