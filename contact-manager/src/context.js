import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext(); 

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact=>
          contact.id !== action.payload)
      };
      case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts] // spread operator
      };
      case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload) :  contact
        )
      }
    default: 
      return state;
  }
};

export class Provider extends Component {

    state = {
        contacts: [],
          dispatch: action => {
            this.setState(state => 
              reducer(state,action))
          }
    }
    
    async componentDidMount(){
      const res = await axios
        .get('https://jsonplaceholder.typicode.com/users');

        this.setState({contacts: res.data});
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
