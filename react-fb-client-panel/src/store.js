import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore'; 

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

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }
