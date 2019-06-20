import React, { Component } from 'react';
import Header from "./header";

class Home extends Component {
  render() {
    return ( 
      <div className="home">
      { Header("MadLibsDos", "Fill out the fields and press the generate button to see the Mad Lib story. Hope it's a good one.") } 
      </div>
    );
  }
}

export default Home;