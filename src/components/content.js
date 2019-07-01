import React, { Component } from "react";

class Content extends Component { //since this is a dynamic component and not simply functional, like input.js, we need to give it a class name and extend component
    render() {
        const data = this.props.data; //dynamic components have props. Props are declared when the component is referred to elsewhere (e.x. <Content prop1="red"/>)
        return (
            <div>
                Ladies and gentlemen, this is <b>{data.colorOne}</b> Barber, your 
                sportscaster, bringing you the last inning of the game between the 
                Cleveland <b>{data.pluralNounOne}</b> and the <b>{data.adjOne}</b> Yankees. <b>{data.celebOne}</b> is pitching 
                for the Yankees. Here's the pitch! It's a low <b>{data.adjTwo}</b> ball that just cuts the inside of 
                the <b>{data.nounOne}</b> for a strike. That makes the count <b>{data.numOne}</b> strikes 
                and <b>{data.numTwo}</b> balls. Now here's the next pitch. The batter swings and connects. 
                It's a long, high <b>{data.nounTwo}</b> out to <b>{data.adjThree}</b> field. But <b>{data.celebTwo}</b> is 
                coming up fast and has it for the second out. The next batter up is <b>{data.celebThree}</b>, the 
                Cleveland <b>{data.adjFour}</b>-stop. Here's the pitch... and it's hit... a short ground ball 
                to third <b>{data.nounThree}</b>. <b>{data.celebFour}</b> scoops it up and throws it to first base 
                for an out, and the game is over. And the Yankees move into second place in the <b>{data.adjFive}</b> League!
            </div>
        )
    }
}
export default Content;