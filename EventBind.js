import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
      this.state = {
         message: 'Hello'
      }
     // this.clickHandler = this.clickHandler.bind(this)      // 3 way to rending class compenents of binding event handler
    }
    // clickHandler(){                       // 1 way to rending class compenents of binding event handler
    //     this.setState({
    //         message: 'Hi'
    //     })
    // }

    clickHandler = () =>
    this.setState({
      message: 'Hi'
    })
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
       {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
       {/* <button onClick={() => this.clickHandler()}>Click</button>  2 way to arrow funtion rending class compenents of binding event handler */}
       <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind