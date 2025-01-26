import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = { id: Date.now(), name, number };
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact];
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleSearch = (value) => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox filter={filter} onFilterChange={handleSearch} />
      {filteredContacts.length > 0 ? (
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    ) : (
      <p style={{ textAlign: 'center', color: '#A0A0A0', marginTop: '20px' }}>
        No contacts available.
      </p>
    )}
    </div>
  );
};

export default App;
