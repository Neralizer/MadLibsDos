import React, { Component } from "react";
import Input from "./input";

class Card extends Component {
    constructor(){
        super();

        this.state = {
            colorOne: "",
            pluralNounOne: "",
            adjOne: "",
            celebOne: ""
        }
        this.handleInputChage= this.handleInputChage.bind(this); //binds function to our constructor, so it knows state
    }

    handleInputChage(event) { // I still don't understand what event is. I think event is equal to whatever is put into the input
        this.setState({ [event.target.name]: event.target.value }) //sets state to what is typed into input
        console.log(this.state);
    }

    render() { // Commenting is weird in my React brackets, so I'm explaining up here. The Input component is called and given props below
                // Those props in order are listed in my input.js file. They are title, state, onChange, and name. 
                // The most important prop is onChange, because it says when input is changed, the handleInputChange function is run

        const inputData = [
            {title: "Color", state: "this.state.colorOne", name: "colorOne"},
            {title: "Plural Noun", state: "this.state.pluralNounOne", name: "pluralNounOne"},
            {title: "Adjective", state: "this.state.adjOne", name: "adjOne"},
            {title: "Celebrity", state: "this.state.celebOne", name: "celebOne"}
        ]
        return (
            <div className="card">
            { // The map function filters through our inputData and returns the input component with title, state, the handleInputChange function, and name
             // I don't understand the index part, but it makes the map function happy. Halfway through video two with nine minutes left
                inputData.map( (data, index) => {
                    return <div key={index}>
                        {data.title}
                    </div>
                })
            }
            </div>
        )
    }
}

export default Card;