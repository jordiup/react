// Note: the bigger the application the more reducers you will have. That's why redux is good for larger applications. 

import { combinedReducers, combineReducers } from 'redux';
import contactReducer from './contactReducer';

export default combineReducers({
    contact: contactReducer
}); 