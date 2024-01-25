import React from "react";
class Statecomponent extends React.Component{
    constructor(){
        super()
        this.state={
            name:"KEC",
            course:"MERN"
        }
    }
   changestate =() =>{
        console.log("Kongu engineering college")//usestate should be used 
    }
        render(){
        return(
            <div>
                <h1>This is State Component</h1>
                <h2>Hello, {this.state.name} This is {this.state.course} class</h2>
                <h3>I am changing the state of the {this.state.name} to {this.changestate()}</h3>
                <button onMouseOver={this.changestate}>click me to change the state</button>
            </div>
        )
    }
}
export default Statecomponent;