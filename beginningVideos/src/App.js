import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (newNinja)=>{
    newNinja.id = Math.random();
    let ninjas = [...this.state.ninjas, newNinja]
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id)=>{
    let ninjas = this.state.ninjas.filter((ninja)=>{
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  }
  // called when components are mounted
  componentDidMount(){
    console.log('components mounted');
  }
  // called when components are updated (state or props)
  componentDidUpdate(prevProps, prevState){
    console.log('component updated');    
    console.log(prevProps);
    console.log(prevState);
  }
  render() {
    return (
      <div className="App">
        <h1> My first react app</h1>
        <p> Welcome </p>
        <Ninjas deleteNinja = {this.deleteNinja} ninjas= {this.state.ninjas}/>
        <AddNinja addNinja = {this.addNinja}/>
      </div>
    );
  }
}

export default App;
