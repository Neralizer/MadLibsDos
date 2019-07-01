import React from "react"; //since this is a functional component and not dynamic, no need to import { Component }

const Input = ({title,state,name}, onChange, index) => { 
        return (
            <div  key={index} className="input">
                <label className="input_number">{index+1}</label>
                <input name={name} value={state} onChange={onChange}/>
                <label className="input_title">{title}</label>
            </div>
        )
    }


export default Input; //so Input can be used as a component