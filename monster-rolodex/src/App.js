import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { InfoPrintout } from './components/info-printout/info-printout.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState( { searchField: e.target.value } )
  }

  render() {

    const { monsters, searchField } = this.state; 
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))


    return (
      <div className="App">
        
        <InfoPrintout name='Jordi' age="21">This is a demonstration that 'children' are passed to the componenent along with jsx attributes of the class</InfoPrintout>

        
        <header className="App-header">

        <SearchBox 
          placeholder="search monsters"
          handleChange={this.handleChange}
        /> 
        
        <CardList monsters={filteredMonsters}> </CardList>

        </header>
    </div>
    );
  }
}

export default App;
