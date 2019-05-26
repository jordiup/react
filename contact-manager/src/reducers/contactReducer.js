import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "../actions/types";

// import { GET_CONTACTS}

const initialState = {
    // test: 'TEST'
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
};

export default function(state = initialState,action) {
    switch(action.type){
      case GET_CONTACTS:
      return {
          ...state
      };
      case DELETE_CONTACT:
      return {
          ...state,
          contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
      case ADD_CONTACT:
      return {
          ...state,
          contacts: [action.payload, ...state.contacts]
      };
      default:
            return state;
    }
};