import React, { Component } from "react";
import Input from "./input";

class Card extends Component {
    constructor(){
        super();

        this.state = {
            color: "BLUE",
            pluralNoun: ""
        }
        this.handleInputChage= this.handleInputChage.bind(this); //binds function to our constructor, so it knows state
    }

    handleInputChage(event) {
        console.log("this is the value", event.target.value); //console logs the value typed into input
        this.setState({ color: event.target.value }) //sets state to what is typed into input
    }

    render() {
        return(
            <div className="card">
            <h1>{this.state.color}</h1>
            <input onChange={(event) => this.handleInputChage(event)}/> 
            </div>
        )

        return (
            <div className="card">
                <h1>{this.state.color}</h1>
                { Input("Color") }
                { Input("Plural Noun")}
            </div>
        )
    }
}

export default Card;