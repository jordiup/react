import React, { Component } from 'react';

class Time extends Component {

  // Todo add ticker to ':'
  // componentDidMount() {
  //   this.interval = setInterval(() =>       this.setState(
  //       { time: Date.now() }
  //     ), 1000
  //   );
  // }
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }


  render() {
    // Date vars
    let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

    // Set am/pm
    let amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr format conversion
    hour = hour % 12 || 12; 

    let minAddZero = (parseInt(min, 10) < 10 ? '0' : '') + min;

    // Todo add ticker to ':'
    // let ticker = function(){
    //   toggle = true;
    //   setInterval(function(){ 
    //     toggle = !toggle; 
    //   }, 1000);
    // }

    return (
      <time id="time">{hour}:{minAddZero} 
      {/* {amPm} */}
      </time>
      )

  }
}

export default Time;
