import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  state = { name: this.props.name, number: this.props.number };

  updateContacts = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    const { number, name } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label>
          Name <br />
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.updateContacts}
            className={styles.input}
            placeholder="Type name... "
          />
        </label>
        <label className={styles.label}>
          Number <br />
          <input
            type="text"
            value={number}
            name="number"
            onChange={this.updateContacts}
            className={styles.input}
            placeholder="Type number... "
          />
        </label>
        <br />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
