// Base
import React, { Component } from "react";
import shortId from "shortid";
// import PropTypes from "prop-types";

// Components
import Section from "./components/Section";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addTodo = (name, number) => {
    const { contacts } = this.state;
    const todo = {
      id: shortId.generate(),
      name,
      number,
    };

    contacts.forEach((contact) => {
      if (contact.name === todo.name) {
        alert(contact.name);
        return;
      }
    });

    // if (filtredName) {
    //   alert("Evrika");
    //   return;
    // }

    this.setState(({ contacts }) => ({
      contacts: [todo, ...contacts],
    }));
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

  //   checkUsers = () => {
  //     const { contacts } = this.state;
  //     return contacts.filter((contact, index, arr) => {
  //       if (arr.includes(contact.name)) {
  //         console.log(contact.name);
  //         return alert(`${contact.name}`);
  //       }
  //       return console.log("Неудача");
  //     });
  //   };

  render() {
    const { contacts, filter } = this.state;
    const visiableTodos = this.getVissiableTodos();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addTodo} />
        </Section>
        <Section title="Contacts">
          {contacts.length >= 2 && (
            <Filter value={filter} onChange={this.changeFilter} />
          )}
          <ContactList array={visiableTodos} />
        </Section>
      </>
    );
  }
}

export default App;
