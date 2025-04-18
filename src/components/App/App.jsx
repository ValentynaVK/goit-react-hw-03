import { useState, useEffect } from "react";
import css from "./App.module.css";
import initialContacts from "../../contacts.json";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contact");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });
  const [searchQuery, setSearchQuery] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name
      .toLowerCase()
      .split(" ")
      .some((word) => word.startsWith(searchQuery.toLowerCase()))
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox handleSearch={handleSearch} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
