// Base
import React, { Component } from "react";
import shortId from "shortid";
import PropTypes from "prop-types";
import users from "./users.json";

// Components
import Container from "./components/Container";
import Section from "./components/Section";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

class App extends Component {
  static defaultProps = {
    filter: "",
    contacts: [],
  };

  static propTypes = {
    contacts: PropTypes.node,
    filter: PropTypes.string,
  };

  state = {
    contacts: users,
    filter: this.props.filter,
  };

  addTodo = (name, number) => {
    const { contacts } = this.state;
    const todo = {
      id: shortId.generate(),
      name,
      number,
    };

    let currentName = "";

    contacts.forEach((contact) => {
      if (contact.name === todo.name) {
        currentName = contact.name;
        alert(`${contact.name} is already in contacts`);
      }
    });

    if (!currentName) {
      this.setState(({ contacts }) => ({
        contacts: [todo, ...contacts],
      }));
    }
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

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visiableTodos = this.getVissiableTodos();

    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addTodo} />
        </Section>
        <Section title="Contacts">
          {contacts.length >= 2 && (
            <Filter value={filter} onChange={this.changeFilter} />
          )}
          <ContactList array={visiableTodos} onDeleteTodo={this.deleteTodo} />
        </Section>
      </Container>
    );
  }
}

export default App;
