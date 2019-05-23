import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component { // (class based component), every component made wille extend this one
  render() {

    return (
      <Provider store={store}>
        <Router basename="contact-manager">
          <div className="App">
            <Header branding="Contact Manager"/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/about/" component={About}/>
                {/* <Route exact path="/about/:id" component={About}/> */}
                <Route exact path="/contact/add" component={AddContact}/>
                <Route exact path="/contact/edit/:id" component={EditContact}/>
                <Route exact path="/test" component={Test}/>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;


/*
    NOTES (JSX):
    - can't use the class attribute, have to use className
    - you can't use the 'for' attribute (used with forms), instead you must use 'htmlFor'
    - you can't return more than one parent element (but you could just wrap the two parents in an external div)
    - you can't create variables inside of the jsx always must be done before

*/
