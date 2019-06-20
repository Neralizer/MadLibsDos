import React from "react"; //since this is a functional component and not dynamic, no need to import { Component }

const Input = (label) => { 
        return (
            <div className="input">
                <input/>
                <label>{label}</label>
            </div>
        )
    }


export default Input; //so Input can be used as a component