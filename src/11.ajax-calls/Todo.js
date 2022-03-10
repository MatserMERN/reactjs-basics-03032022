import React, { Component } from 'react'

export class Todo extends Component {
    constructor(){
        super()

        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data =>this.setState({todos: data}))
    }
  render() {
    return (
      <div className="container">
          <h1>List of Todos</h1>
          {
              this.state.todos.map(todo => (
                  <ol key={todo.id} type="a">
                      <li>{todo.id}</li>
                      <li>{todo.userId}</li>
                      <li>{todo.title}</li>
                      <li>{todo.completed? "true": "false"}</li>
                  </ol>
              ))
          }
      </div>
    )
  }
}

export default Todo