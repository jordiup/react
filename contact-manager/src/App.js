import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component { // (class based component), every component made wille extend this one
  render() {

    const name = 'Larry';
    const showHello = true;
    const showMath = true;
    const num1 = 40;
    const num2 = 23;


    let math;
    if(showMath) {
      math = <h4>{num1} +  {num2}= {num1 + num2}</h4>;
    } else {
      math = null;
    }

    return (
      <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;

// <Header branding="Contact Manager"/>
// <div className="container">
//   <Contact name="Big Boss" email="ceo@mail.com" phone="555-555-555"/>
//   <Contact name="Mr. Burns" email="bossman@springfield.com" phone="555-666-555"/>
// </div>

// Below was used in initial tutorial...
// <h1>The App Component</h1>
// {showHello ? <h4>Hello {name.toUpperCase()}</h4> : null}
// {math}
// <label htmlFor="name">Name</label>


/*
    NOTES (JSX):
    - can't use the class attribute, have to use className
    - you can't use the 'for' attribute (used with forms), instead you must use 'htmlFor'
    - you can't return more than one parent element (but you could just wrap the two parents in an external div)
    - you can't create variables inside of the jsx always must be done before

*/
