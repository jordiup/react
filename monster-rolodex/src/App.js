import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: '1'
        },
        {
          name: 'Drakula',
          id: '2'
        },
        {
          name: 'Zombie',
          id: '3'
        }
      ]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => 
      response.json())
    // .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      {
        this.state.monsters.map(monster => <h1>{monster.name}</h1>)
      }

      </header>
    </div>
    );
  }
}

export default App;
