import React from "react"; //since this is a functional component and not dynamic, no need to import { Component }

const Header = (title, content) => { //header component, title and content needed as arguments
    return (
        <div className="header"> 
            <div className="header_skew"></div>
            <div className="header_border"></div>
            <h1>{title}</h1> 
            <p>{content}</p>
        </div>
    )
}

export default Header; //so Header can be used as a component