import React, { Component } from 'react';
import logo from './logo.svg';
import List from './components/list';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Here is my new app</h1>
        </header>
        <p className="App-intro">
          By Benjamin de Boissieu
          <List />
        </p>

      </div>
    );
  }
}

export default App;
