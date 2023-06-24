import React,{Component} from "react";


class Welcome extends Component {

    render(){
        const {name,heroName} = this.props;
        return(
            <div className="hhhh">
                <h1>heloo  {name} {heroName} </h1>
            </div>
        )
    }
}

export default Welcome