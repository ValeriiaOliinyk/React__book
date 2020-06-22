// Base
import React, { Component } from "react";
import shortId from "shortid";
// import PropTypes from "prop-types";

// Components
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  addTodo = (name, number) => {
    const todo = {
      id: shortId.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [todo, ...contacts],
    }));
  };

  updateTodos = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  updateNumbers = (e) => {
    this.setState({ number: e.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  handleSubmit = (e) => {
    const { number, name } = this.state;
    e.preventDefault();
    this.addTodo(name, number);
    this.reset();
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVissiableTodos = () => {
    const { contacts, filter } = this.state;
    const normalizzedFilter = filter.toLocaleLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizzedFilter)
    );
  };

  render() {
    const { contacts, name, number, filter } = this.state;

    const visiableTodos = this.getVissiableTodos();

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name <br />
            <input type="text" value={name} onChange={this.updateTodos} />
          </label>
          <br />
          <label>
            Number <br />
            <input type="text" value={number} onChange={this.updateNumbers} />
          </label>
          <br />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        {contacts.length >= 2 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )}
        <ul>
          {visiableTodos.map((contact) => (
            <li key={contact.id}>
              {contact.name} : {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
