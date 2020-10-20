import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsSate] = useState({
    persons: [
      { name: "Sharon", age: 32 },
      { name: "Fred", age: 29 },
    ],
  });

  const [otherState, setOtherState] = useState("some other values");

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    setPersonsSate({
      persons: [
        { name: newName, age: 32 },
        { name: "Fred Lungu", age: 29 },
      ],
    });
  };

  const nameChangedhandler = (event) => {
    setPersonsSate({
      persons: [
        { name: "Sharon", age: 32 },
        { name: event.target.value, age: 29 },
      ],
    });
  };

  const style = {
    backgroundcolour: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <p>From local machine :)</p>
      <button
        style={style}
        onClick={() => switchNameHandler("Mrs. Sharon Lungu")}
      >
        Switch name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />

      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, "Mr. Fred Lungu")}
        changed={nameChangedhandler}
      >
        Hobbies: racing
      </Person>
    </div>
  );
};

export default App;
