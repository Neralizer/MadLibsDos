import React from "react"; //since this is a functional component and not dynamic, no need to import { Component }

const Input = (title,state,onChange,name) => { 
        return (
            <div className="input">
                <input name={name} value={state} onChange={onChange}/>
                <label>{title}</label>
            </div>
        )
    }


export default Input; //so Input can be used as a component