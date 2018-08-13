import React, { Component } from 'react';
import logo from './logo.svg';
import TodoForm from './components/todoForm';
import List from './components/list';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To do App</h1>
        </header>
        <p className="App-intro">
          By Benjamin de Boissieu
          <TodoForm/>
          <List todos={[]}/>
        </p>

      </div>
    );
  }
}

export default App;
