import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore'; 
import notifyReducer from './reducers/notifyReducer';
import settingsReducer from './reducers/settingsReducer';

// Reducers 
// @todo 

const firebaseConfig = {
    apiKey: "AIzaSyBG0Tg3pzTlHzXUjsd0IwSGQpUCEvBAKm4",
    authDomain: "reactclientpanel-d5a9d.firebaseapp.com",
    databaseURL: "https://reactclientpanel-d5a9d.firebaseio.com",
    projectId: "reactclientpanel-d5a9d",
    storageBucket: "reactclientpanel-d5a9d.appspot.com",
    messagingSenderId: "376173747429",
    appId: "1:376173747429:web:f6ffbd4d130b4e4e"
}

// React-redux firebase config 
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

  // Init firebase instance 
  firebase.initializeApp(firebaseConfig);
  // Init firestore 
  const firestore = firebase.firestore();
//   const settings = {timestampsInSnapshots: true}
//   firestore.settings(settings);


  // Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) 
  )(createStore);


  // Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    notify: notifyReducer,
    settings: settingsReducer
  })
  

// Check for settings in LS 
if(localStorage.getItem('settings') == null){
  // Default settings 
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false  
  }

  // Set to LS 
  localStorage.setItem('settings', JSON.stringify(defaultSettings));
}

// Create initial state 
const initialState = {settings: JSON.parse(localStorage.getItem('settings'))};

//   Create store 
const store = createStoreWithFirebase(rootReducer, initialState,compose(reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;