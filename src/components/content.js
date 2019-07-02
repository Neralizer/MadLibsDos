import React, { Component } from "react";

class Content extends Component { //since this is a dynamic component and not simply functional, like input.js, we need to give it a class name and extend component
    constructor() {
        super();
        this.count = 1;
    }
    
    renderLabel(data){
        return [
            <div className="card_content_label">{this.count++}</div>,
            <b>{data}</b>
        ]
    }

    render() {
        const data = this.props.data; //dynamic components have props. Props are declared when the component is referred to elsewhere (e.x. <Content prop1="red"/>)
        return (
            <div className="card_content">
                <p>
                Ladies and gentlemen, this is {this.renderLabel(data.colorOne)} Barber, your sportscaster, bringing you the last inning of the game between the 
                Cleveland {this.renderLabel(data.pluralNouneOne)} and the {this.renderLabel(data.adjOne)} Yankees. {this.renderLabel(data.celebOne)} is pitching 
                for the Yankees. Here's the pitch! It's a low {this.renderLabel(data.adjTwo)} ball that just cuts the inside of 
                the {this.renderLabel(data.nounOne)} for a strike. That makes the count {this.renderLabel(data.numOne)} strikes 
                and {this.renderLabel(data.numTwo)} balls. Now here's the next pitch. The batter swings and connects. 
                It's a long, high {this.renderLabel(data.nounTwo)} out to {this.renderLabel(data.adjThree)} field. But {this.renderLabel(data.celebTwo)} is 
                coming up fast and has it for the second out. The next batter up is {this.renderLabel(data.celebThree)}, the 
                Cleveland {this.renderLabel(data.adjFour)}-stop. Here's the pitch... and it's hit... a short ground ball 
                to third {this.renderLabel(data.nounThree)}. {this.renderLabel(data.celebFour)} scoops it up and throws it to first base 
                for an out, and the game is over. And the Yankees move into second place in the {this.renderLabel(data.adjFive)} League!
                </p>
            </div>
        )
    }
}
export default Content;