import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(){
         super()

         this.state = {
             message: 'Hello'
         }

         // 3rd Approach
         this.clickHandler = this.clickHandler.bind(this)
     }

    //  clickHandler(){
    //      console.log(this)
    //      this.setState({
    //          message: 'Thank you'
    //      })
    //  }
    
    // 4th Approach 
    clickHandler =()=>{
        console.log(this)
        this.setState({
            message: 'Thank you'
        })
    }
  render() {
    return (
      <div className="container">
          <h1>{this.state.message}</h1>
          {/* <button className="btn btn-primary" onClick={this.clickHandler}>Click</button> */}

          {/* 1st Approach */}
          {/* <button className="btn btn-primary" onClick={this.clickHandler.bind(this)}>Click</button> */}

          {/* 2nd Approach */}
          {/* <button className="btn btn-primary" onClick={() =>this.clickHandler()}>Click</button> */}

          {/* 3rd Approach */}
          {/* <button className="btn btn-primary" onClick={this.clickHandler}>Click</button> */}

          {/* 4th Approach */}
          <button className="btn btn-primary" onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind