import React, { Component } from "react";
import Input from "./input";
import Content from "./content";

class Card extends Component {
    constructor(){
        super();

        this.state = {
            colorOne: "",
            pluralNounOne: "",
            adjOne: "",
            celebOne: "",
            adjTwo: "",
            nounOne: "",
            numOne: "",
            numTwo: "",
            nounTwo: "",
            adjThree: "",
            celebTwo: "",
            celebThree: "",
            adjFour: "",
            nounThree: "",
            celebFour: "",
            adjFive: ""
        }
        this.handleInputChage = this.handleInputChage.bind(this); //binds function to our constructor, so it knows state
    }

    handleInputChage(event) { // I still don't understand what event is. I think event is equal to whatever is put into the input
        this.setState({ [event.target.name]: event.target.value }) //sets state to what is typed into input
    }

    render() { // Commenting is weird in my React brackets, so I'm explaining up here. The Input component is called and given props below
                // Those props in order are listed in my input.js file. They are title, state, onChange, and name. 
                // The most important prop is onChange, because it says when input is changed, the handleInputChange function is run

        const inputData = [
            {title: "Color", state: this.state.colorOne, name: "colorOne"},
            {title: "Plural Noun", state: this.state.pluralNounOne, name: "pluralNounOne"},
            {title: "Adjective", state: this.state.adjOne, name: "adjOne"},
            {title: "Celebrity", state: this.state.celebOne, name: "celebOne"},

            {title: "Adjective", state: this.state.adjTwo, name: "adjTwo"},
            {title: "Noun", state: this.state.nounOne, name: "nounOne"},
            {title: "Number", state: this.state.numOne, name: "numOne"},
            {title: "Number", state: this.state.numTwo, name: "numTwo"},

            {title: "Noun", state: this.state.nounTwo, name:"nounTwo"},
            {title: "Adjective", state: this.state.adjThree, name: "adjThree"},
            {title: "Celebrity", state: this.state.celebTwo, name: "celebTwo"},
            {title: "Celebrity", state: this.state.celebThree, name: "celebThree"},

            {title: "Adjective", state: this.state.adjFour, name: "adjFour"},
            {title: "Noun", state: this.state.nounThree, name: "nounThree"},
            {title: "Celebrity", state: this.state.celebFour, name: "celebFour"},
            {title: "Adjective", state: this.state.adjFive, name: "AdjectiveFive"}
        ]
        return (
            <div className="card">
            { // The map function filters through our inputData and returns the input component with title, state, the handleInputChange function, and name
                // because Input is imported from input.js, the input function looks for title, name, and state, calls it data, and then runs 
                // the handleInputChange function
                inputData.map(data => Input( (data), this.handleInputChage))
            }
            <Content data={this.state}/> 
            </div>
        ) //video 3 paused at 2:21 remaining
    }
}

export default Card;