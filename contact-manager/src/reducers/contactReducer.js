import { GET_CONTACT, GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT,  UPDATE_CONTACT } from "../actions/types";

// import { GET_CONTACTS}

const initialState = {
    // test: 'TEST'
        contacts: [],
        contact: {}
};

export default function(state = initialState,action) {
    switch(action.type){
      case GET_CONTACT:
      return {
          ...state,
          contact: action.payload
      };
      case GET_CONTACTS:
      return {
          ...state,
          contacts: action.payload
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
      case UPDATE_CONTACT:
      return {
          ...state,
          contacts: state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload) : contact)
      };
      default:
            return state;
    }
};