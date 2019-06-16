import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Time from './components/Time';
import Greeting from './components/Greeting';
import Focus from './components/Focus.js';


function App() {
  return (
    <div className="App">

      <Time />
      <Greeting />
      <Focus />

    </div>
  );
}

export default App;


// Misc clippings
{/* <img src={logo} className="App-logo" alt="logo" /> */}