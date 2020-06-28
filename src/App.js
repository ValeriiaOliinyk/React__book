// Base
import React, { Component } from 'react';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import users from './users.json';

// Components
import Container from './components/Container';
import Section from './components/Section';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

class App extends Component {
  static defaultProps = {
    filter: '',
    contacts: [],
  };

  static propTypes = {
    contacts: PropTypes.node,
    filter: PropTypes.string,
  };

  state = {
    contacts: users,
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const phonebook = {
      id: shortId.generate(),
      name,
      number,
    };

    const currentName = contacts.some(
      contact => contact.name === phonebook.name,
    );

    if (currentName) {
      alert(`${phonebook.name} is already in contacts`);
    }

    if (!currentName) {
      this.setState(({ contacts }) => ({
        contacts: [phonebook, ...contacts],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVissiableContacts = () => {
    const { contacts, filter } = this.state;
    const normalizzedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizzedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        currentContact => currentContact.id !== contactId,
      ),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visiableContacts = this.getVissiableContacts();

    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length >= 2 && (
            <Filter value={filter} onChange={this.changeFilter} />
          )}
          <ContactList
            contacts={visiableContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
