import React, {Component} from 'react';

const Context = React.createContext(); 

export class Provider extends Component {
    state = {
        contacts: [
            {
              id: 1,
              name: 'John Doe',
              email: 'jd@postman.com',
              phone: '555-444-333'
            },
            {
              id: 2,
              name: 'Kazza Williams',
              email: 'kw@mail.com',
              phone: '123-444-333'
            },
            {
              id: 3,
              name: 'Jimmy Benson',
              email: 'jb@mail.com',
              phone: '222-1111-333'
            },
          ]    
    }

    render() {
        return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>);
    }
};

// We want to export the consumer because we have a provider and you want to use the consumer within any component you want to access the stae from within.
export const Consumer = Context.Consumer; 
