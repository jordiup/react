import React, { Component } from 'react'

class Focus extends Component {
  render() {
    return (
      <div className="focusDiv">
        <h2>What would you like to achieve for today?</h2>
        {/* <h2 id="focus" contentEditable="true">Do something awesome!</h2> */}
        <div>
          <input type="text" className="focus-prompt"/>
        </div>
      </div>
    )
  }
}

export default Focus;