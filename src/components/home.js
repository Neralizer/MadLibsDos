import React, { Component } from 'react';
import Header from "./header";
import Card from "./card";

class Home extends Component { //establishes a class component
  render() {
    return ( 
      <div className="home"> 
       {Header("MadLibsDos", "Fill out the fields and press the generate button to see the Mad Lib story. Hope it's a good one.")} 
      <Card/>
      </div>
    );
  }
}

export default Home;