import React from 'react';
import './Person.css'
// takes in properties set from App.js for each individual iteration of the jsx
const person = (props) => {
    return (
        <div className='Person'>
            <p>I'm {props.name} and I am {props.age} years old!!</p>
            <p onClick={props.click}>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default person;