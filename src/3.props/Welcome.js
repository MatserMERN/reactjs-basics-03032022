import React, { Component } from 'react'

 class Welcome extends Component {
  render() {
      const {name, skill} = this.props
    return (
      <div className="container">
          <h1>{name} is a {skill}</h1>
      </div>
    )
  }
}

export default Welcome