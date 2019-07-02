import React from "react"; //since this is a functional component and not dynamic, no need to import { Component }

const Input = ({title,state,name}, onChange, index) => { //the first label has the classname of either input_number gray or green, depending on state.
                                                        //if state is blank, use gray. if not, use green.
        return (
            <div  key={index} className="input"> 
                <label className={`input_number ${state == "" ? "gray" : "green"}`}>{index+1}</label> 
                <input placeholder= {title} name={name} value={state} onChange={onChange}/>
                <label className="input_title">{title}</label>
            </div>
        )
    }


export default Input; //so Input can be used as a component