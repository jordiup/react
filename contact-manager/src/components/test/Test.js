import React, { Component } from 'react'

class Test extends Component {

    state = {
        title: '',
        body:''
    };

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => this.setState({
            title: data.title,
            body: data.body
        }));
    }

    
  
    // componentWillMount(){
    //     console.log('componentWillMount....');
    // }

    // componentDidUpdate(){
    //     console.log('componentDidUpdate....');
    // }

    // componentWillUpdate(){
    //     console.log('componentWillUpdate....');
    // }

    // UNSAFE_componentWillReceiveProps(nextProps, nextState){
    //     console.log('componentWillReceiveProps...');
    // }

    // static getDerivedStateFromProps(nextProps,prevState){
    //     return null;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     return null;
    // }
  
  
  
  
  
      render() {
          const { title, body } = this.state;
    return (
      <div>
        <h1>API Test component</h1><br/>
        <h2>{title}</h2>
        <h4>{body}</h4>
      </div>
    )
  }
}


export default Test;