import React, { Component } from 'react'

export default class Message extends Component {
    constructor(props) {
      super(props)
      this.state = {
        message : 'Welcome Visitors'
      }
    }
    changeMessage(){
        this.setState({
             message : 'Thank you for Subscibing'
        }
        )    
       
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeMessage()}>Subscibe</button>
      </div>
    )
  }
}
