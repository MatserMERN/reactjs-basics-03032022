import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(){
        super()

        this.state = {
            name: 'Parent'
        }

        this.callParent = this.callParent.bind(this)
    }

    callParent(childName){
        alert(`Calling ${this.state.name} from ${childName}`)
    }
  render() {
    return (
      <div className="container">
          <h2>Call a parent method from Child</h2>
          <Child callParent={this.callParent} />
      </div>
    )
  }
}

export default Parent