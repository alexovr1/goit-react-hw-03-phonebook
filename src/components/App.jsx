import { nanoid } from 'nanoid';

import { Component } from 'react';

import { Form } from './Form/Form';

import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = ({ name, number }, actions) => {
    const normalizedName = name.toLowerCase();
    if (
      !this.state.contacts.find(
        contact => contact.name.toLowerCase() === normalizedName
      )
    ) {
      this.setState(prevstate => ({
        contacts: [...prevstate.contacts, { id: nanoid(), name, number }],
      }));
    } else {
      alert(`${name} is already is contacts`);
    }
    actions.resetForm();
  };

  handleDelete = name => {
    this.setState(prevstate => ({
      contacts: prevstate.contacts.filter(contact => contact.name !== name),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <Form handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Contacts contacts={contacts} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
