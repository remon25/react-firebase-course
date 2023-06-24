import React,{Component} from "react";


class Message extends Component {
            constructor(){
                super()
                this.state={
                    message:"heloo remon"
                }
            }


changeMes = ()=>{

    this.setState({
        message:"thank for subs"
    })


}

    render(){
        return(
            <div className="hhhh">
                <h1> {this.state.message}</h1>
                <button onClick={this.changeMes}>Click to sub</button>
                <button onClick={this.changeMes}>Click to sub</button>
                <button onClick={this.changeMes}>Click to sub</button>
            </div>
        )
    }
}

export default Message