import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Hello Jordi!"
    };
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.string}</p>
        <p>Code formatted hello: <br></br><code>> {this.state.string}</code></p>
        <button onClick={ () => this.setState({ string: "Hello Billy!" })}>Change text</button>
      </header>
    </div>
    );
  }
}

export default App;
