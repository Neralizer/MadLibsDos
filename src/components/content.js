import React, { Component } from "react";

class Content extends Component { //since this is a dynamic component and not simply functional, like input.js, we need to give it a class name and extend component
    render() {
        const data = this.props.data; //dynamic components have props. Props are declared when the component is referred to elsewhere (e.x. <Content prop1="red"/>)
        return (
            <div className="card_content">
                <p>
                Ladies and gentlemen, this is <span className="card_content_label">1</span><b>{data.colorOne}</b> Barber, your sportscaster, bringing you the last inning of the game between the 
                Cleveland <span className="card_content_label">2</span><b>{data.pluralNounOne}</b> and the <span className="card_content_label">3</span><b>{data.adjOne}</b> Yankees. <span className="card_content_label">4</span><b>{data.celebOne}</b> is pitching 
                for the Yankees. Here's the pitch! It's a low <span className="card_content_label">5</span><b>{data.adjTwo}</b> ball that just cuts the inside of 
                the <span className="card_content_label">6</span><b>{data.nounOne}</b> for a strike. That makes the count <span className="card_content_label">7</span><b>{data.numOne}</b> strikes 
                and <span className="card_content_label">8</span><b>{data.numTwo}</b> balls. Now here's the next pitch. The batter swings and connects. 
                It's a long, high <span className="card_content_label">9</span><b>{data.nounTwo}</b> out to <span className="card_content_label">10</span><b>{data.adjThree}</b> field. But <span className="card_content_label">11</span><b>{data.celebTwo}</b> is 
                coming up fast and has it for the second out. The next batter up is <span className="card_content_label">12</span><b>{data.celebThree}</b>, the 
                Cleveland <span className="card_content_label">13</span><b>{data.adjFour}</b>-stop. Here's the pitch... and it's hit... a short ground ball 
                to third <span className="card_content_label">14</span><b>{data.nounThree}</b>. <span className="card_content_label">15</span><b>{data.celebFour}</b> scoops it up and throws it to first base 
                for an out, and the game is over. And the Yankees move into second place in the <span className="card_content_label">16</span><b>{data.adjFive}</b> League!
                </p>
            </div>
        )
    }
}
export default Content;