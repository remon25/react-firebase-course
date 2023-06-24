import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"remon"
      }
      this.showMess = this.showMess.bind(this) 
    }

    showMess(){
        alert(`heloo ${this.state.parentName}`)
    }
  render() {
    return (
      <div>
        <Child Handler={this.showMess}/>
      </div>
    )
  }
}

export default Parent