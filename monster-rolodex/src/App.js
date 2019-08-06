import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { InfoPrintout } from './components/info-printout/info-printout.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => 
      response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        
        <InfoPrintout name='Jordi' age="21">This is a demonstration that 'children' are passed to the componenent along with jsx attributes of the class</InfoPrintout>

        
        <header className="App-header">
        
        <CardList monsters={this.state.monsters}> 
        </CardList>

        </header>
    </div>
    );
  }
}

export default App;
