import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter:0
      }
    }

    incOne(){
        this.setState(prev=>({
            counter : prev.counter + 1
        }))
    }

    incFive(){
        this.incOne()
        this.incOne()
        this.incOne()
        this.incOne()
        this.incOne()
    }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={()=>this.incFive()}>Click</button>
      </div>
    )
  }
}

export default Counter