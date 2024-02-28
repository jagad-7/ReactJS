import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    if(this.state.isLoggedIn){
        return(
            <h1>Welcome Jagadeesh</h1>
        )
    }else{
        return(
            <h1>Welcome Guest</h1>
        )
    }
  }
}

export default UserGreeting