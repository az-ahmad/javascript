// importing useState is very imporant in React apps, REACT HOOKS
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import Validation from './Validation/Validation';
import Char from './Char/Char';

// we create can create the app as a function and then have useState, which alway has only two uses, the state itself and the call for re-render
// here we create function 'app' that takes in properties as argument
const app = props => {

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solud blue',
    padding: '8px',
    cursor: 'pointer',
    color: 'red'
  }

  // create function for useState with two variables, and create an object of the information
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Aziz', age: 25},
      {name: 'John Wick', age: '1hunna'}
    ],
  });
  // another function for another useState so that they all get re-rendered and not left behind
  const [otherState, setOtherState] = useState({otherState: 'some other balue ting here wag1'});

  // function for the button that sets the new state with changed info
  // takes in argument (optional)
  const switchNameHandler = (newName) => {
        setPersonsState({persons: [
          {name: newName, age: 25},
          {name: 'John Wick', age: '3hunna'},

        ]})
      }
  const inputNameHandler = event => {
    setPersonsState({persons: [
      {name: 'Mock', age: 25},
      {name: event.target.value, age: '3hunna'},

    ]})
  }

  const [ textBlock, settextBlock ] = useState({
    text : ''
  })

  const inputListener = event => {
    settextBlock({
      text: event.target.value
    })
  }

  const deleteHandler = letterIndex => {
    const text = [...textBlock.text];
    text.splice(letterIndex, 1);
    settextBlock({
      text: text
    })

  }
    return (
      // JSX
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={switchNameHandler.bind(this,'Bloodclot')}>Switch Name</button>
        {/* Person call on click activates switchHandler and sends it a new name to update with */}
        {/* Person tag takes from Person.js */}
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} click={switchNameHandler.bind(this,'Stinksz')}> Ozzz boss</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} changed={inputNameHandler}> Ozzz boss</Person>
        <p>------------------</p>
        <input type='text' onChange={inputListener} />
        <Validation sentText={textBlock.text.length} />
        <Char sentText={textBlock.text} onClick={deleteHandler.bind(this, 1)}/>
      </div>
    );
  }

export default app;
