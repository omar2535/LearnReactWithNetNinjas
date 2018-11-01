import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy new keyboard'},
      {id: 2, content: 'say hello world'}
    ]
  };

  // deletes a todo 
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo)=>{
      return todo.id !== id
    })
    this.setState({
      todos: todos
    });
  }

  // adds a todo to the todolist
  addTodo = (todoObject) =>{
    todoObject.id = Math.random();
    let todos = [...this.state.todos, todoObject]
    console.log(todoObject);
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos = {this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
