import React, { Component } from 'react'

 class Counter extends Component {
     constructor(){
         super()

         this.state = {
             count: 0
         }
     }

     addCount(){
        // this.state.count = this.state.count + 1 - never do this
        // Always use this.setState to update your state
         this.setState({
            count: this.state.count +1
         }, () => console.log(this.state.count))
         
     }

  render() {
    return (
      <div className="container">
          <h1>Counter : {this.state.count}</h1>
          <button className="btn btn-primary"
                  onClick={() => this.addCount()}
          >Add Count</button>
      </div>
    )
  }
}

export default Counter