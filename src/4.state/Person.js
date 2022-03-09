import React, { Component } from 'react'

 class Person extends Component {
     constructor(){
         super()

         this.state = {
             name: 'Scott',
             city: 'Boston',
             isAdmin : true
         }
     }
  render() {
      const {name, city, isAdmin} = this.state
    return (
      <div className="container">
          <h2>Name: {name}</h2>
          <h2>City: {city}</h2>
          <h2>IsAdmin: {isAdmin ? "True": "False"}</h2>
      </div>
    )
  }
}

export default Person