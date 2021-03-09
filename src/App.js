import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {
  state = {
    // contacts: [],
  };

  formSubmitHandler = data => {
    setTimeout(() => {
      console.log(data);
    }, 2000);
  };

  render() {
    return (
      <div className="Phonebook">
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />

        {/* <p>{name}</p> */}
      </div>
    );
  }
}

export default App;
