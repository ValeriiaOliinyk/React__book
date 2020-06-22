// Base
import React, { Component } from "react";
import shortId from "shortid";
// import PropTypes from "prop-types";

// Components

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  addTodo = (text) => {
    const todo = {
      id: shortId.generate(),
      name: text,
    };

    this.setState((prevState) => ({
      contacts: [todo, ...prevState.contacts],
    }));
  };

  updateTodos = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addTodo(this.state.name);
    this.reset();
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name <br />
            <input type="text" value={name} onChange={this.updateTodos} />
          </label>
          <br />
          <button type="submit">Add contact</button>
        </form>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
