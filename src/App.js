import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

/*
function App() {

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <p>From local machine :)</p>
      <button>Switch name</button>
      <Person name="Sharon" age="32" />
      <Person name="Fred" age="29"> Hobbies: racing</Person>
    </div>
  );

  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React!'));
}
*/

class App extends Component {
  
  state = {
    persons: [
      {name: 'Sharon', age: 32},
      {name: 'Fred', age: 29}
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked');

    /*
    Don't do this. Do not change the state directly

    this.state.persons[0].name = 'Sharon Lungu';
    */

    this.setState(
      {
        persons: [
          {
            name: 'Sharon Lungu', age: 32
          },
          {
            name: 'Fred Lungu', age: 29
          }
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
      <h1>Hello React!</h1>
      <p>From local machine :)</p>
      <button onClick={this.switchNameHandler}>Switch name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Hobbies: racing</Person>
    </div>
    )
  }
}

export default App;
