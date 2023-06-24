import React, { Component } from 'react'

export class EventFun extends Component {
    EventHan(){

        console.log("clicked from classs")

    }
  render() {
    return (
      <div>
        <button onClick={this.EventHan}>Click</button>
      </div>
    )
  }
}

export default EventFun