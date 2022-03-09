import React, { Component } from 'react'

 class Message extends Component {
     constructor(){
         super()

         this.state = {
            message: 'Welcome Scott' 
         }
     }

     subscribe(){

        // this.state.message = "Here you can subscribe"
        // console.log(this.state.message)
         this.setState({
             message: 'Thank you for subscribing'
         })

     }
  render() {
    return (
      <div className="container">
          <h1>{this.state.message}</h1>
          <button className="btn btn-primary"
                  onClick={() =>this.subscribe()}
          >Subscribe</button>
      </div>
    )
  }
}

export default Message