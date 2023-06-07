import { useState, useEffect } from "react";

import { nanoid } from "nanoid";
import initialContacts from "../contacts.json";

import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "../components/Layout/Layout";

import { Section } from "../components/Section/Section";
import { Form } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { ContactFilter } from "../components/ContactFilter/ContactFilter";

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  }

  return initialContacts;
}

export const App = () => {

  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');
 
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    }

    contacts.find(contact => contact.name.toUpperCase() === newContact.name.toUpperCase())
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts([newContact, ...contacts]);
    
    resetForm();
  }

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id))
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toUpperCase();
    return contacts.filter(contact => contact.name.toUpperCase().includes(normalizedFilter))
  }
  const visibleContacts = getVisibleContacts();
  
  return (
    <Layout>
      <GlobalStyle />

      <Section title="Phonebook"> 
        <Form onSubmit={addContact} />
      </Section>
      
      <Section>
        <ContactFilter
          value={filter}
          onChange={changeFilter}
        /> 
        <ContactList
          contacts={visibleContacts}
          onDelete={deleteContact}
        />
      </Section>
      
    </Layout>
  );
};
