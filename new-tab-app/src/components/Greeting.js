import React, { Component } from 'react'

class Greeting extends Component {
  render() {

      // Date vars
      let today = new Date(),
          hour = today.getHours();
  
      // Set greeting
      let greeting = "";
      if (hour > 0 && hour < 12 ){
        greeting = "Good morning";
      } if (hour > 12 && hour < 17){
        greeting = "Good afternoon";
      } else {
        greeting = "Good evening";
      }
      
    let name = "[enter name]"

    if (localStorage.getItem('name') != null || ''){
      name = localStorage.getItem('name');
    }
    
    function setName(e) {
      if (e.type === 'keypress'){
        // Make sure enter is pressed 
        if (e.which == 13 || e.keyCode == 13){
          localStorage.setItem('name', e.target.innerText);
          e.target.blur();
        }
      } else {
        localStorage.setItem('name', e.target.innerText)
      }
    } 

    function handleBlur(object){
      object.innerText= "JEFF";
    }

    return (
      <div>
      <h1>
        <span id="greeting">{greeting}, </span>
        <span id="name" contentEditable="true" onKeyPress={setName}> {name}</span>.
      </h1>

      </div>
    )
  }
}

export default Greeting;