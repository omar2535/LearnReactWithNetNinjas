import React, { Component } from 'react';


class AddTodoForm extends Component {
    state = {
        content: null
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
    }

    handleChange = (e)=>{
        this.setState({
            content: e.target.value
        })
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="content">Todo:</label>
                    <input type="text" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }

}

export default AddTodoForm