import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(){
        super()

        this.state ={

        }
        console.log('constrcutor of lifecycleB is called')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of lifecycleB is called')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of lifecycleB is called')
    }

  render() {
    console.log('render of lifecycleB is called')
    return (
      <div></div>
    )
  }
}

export default LifeCycleB