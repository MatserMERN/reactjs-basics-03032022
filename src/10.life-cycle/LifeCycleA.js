import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(){
        super()

        this.state ={

        }
        console.log('constrcutor of lifecycleA is called')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of lifecycleA is called')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of lifecycleA is called')
    }

  render() {
    console.log('render of lifecycleA is called')
    return (
      <div>
          <h1>Order of Lifecycle Events</h1>
          <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA