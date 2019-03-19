import React, { Component } from "react";
import "./App.css";

class App extends Component {

  render() {

    const formatName = (user) => {
      return `${user.firstName} ${user.lastName}`;
    }
   
    const user = {
      firstName: 'Björn',
      lastName: 'Roland',
      avatarUrl: ''
    };
    
    const element = (
      <h2>
        Hello, {formatName(user)}!
      </h2>
    );
 
    return (
      <div className="App">
        <h1> Hello Cruel World! </h1>
        {element}
      </div>
    );
  }
}

export default App;