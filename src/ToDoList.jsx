import React from 'react'
import './App.css';

export const ToDoList = (props) => {
    
    return (
        <div className="row mt-2 todo row-cols-2">
            <li className="col-lg-10 col-md-10 col-sm-10"> {props.Text}</li>
            <i className="fa fa-times col-lg-2 col-md-2 col-sm-2 del mx-auto" aria-hidden="true" 
            onClick={()=>{
                props.onSelect(props.id);
            }} />
        </div>
    )
};
