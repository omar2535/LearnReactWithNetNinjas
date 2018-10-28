import React, { Component } from 'react';
import Ninjas from './ninjas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> My first react app</h1>
        <p> Welcome </p>
        <Ninjas name="Omar" age="20" belt="black"/>
      </div>
    );
  }
}

export default App;
