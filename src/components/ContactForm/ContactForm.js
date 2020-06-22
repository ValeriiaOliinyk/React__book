import React, { Component } from "react";

class ContactForm extends Component {
  state = { name: "", number: "" };

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
    this.props.onSubmit(name, number);
    this.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
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
    );
  }
}

export default ContactForm;
