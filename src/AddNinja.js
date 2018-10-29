import React, { Component } from 'react';

class AddNinjaForm extends Component{

    state = {
        name: null,
        age: null,
        belt: null
    };
    //handles changes to forms
    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    //
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addNinja(this.state);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddNinjaForm