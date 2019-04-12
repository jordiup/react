import React, { Component } from 'react'
import Contact from './Contact'
// import {  } from 'prop-types'

class Contacts extends Component {

  /*
    You can add *State* in two ways:
    - with a constructor method; runs when the component is mounted
    - or with the state keyword
  */

  constructor() {
    super();
    this.state = {
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
  }

  // render () {
  //   const { name, email, phone } = this.props;
  // }

  state = {}

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact 
            key={contact.id}
            contact={contact} />
        ))}
      </div>
      );
    
    // return <div>{contacts.map(contact => <h1>{contact.name}</h1>)}</div>;
  }
}

export default Contacts
