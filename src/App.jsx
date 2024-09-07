import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const initialContactList = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const getContactListFromLS = () => {
    const savedContactList = window.localStorage.getItem("saved-contact-list");
    return savedContactList !== null
      ? JSON.parse(savedContactList)
      : initialContactList;
  };

  const [contactList, setContactList] = useState(getContactListFromLS);
  const [filterContacts, setFilterContacts] = useState("");

  useEffect(() => {
    window.localStorage.setItem(
      "saved-contact-list",
      JSON.stringify(contactList)
    );
  }, [contactList]);

  const addContact = (newContact) => {
    setContactList((prevContactList) => {
      return [...prevContactList, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContactList((prevContactList) => {
      return prevContactList.filter((contact) => contact.id !== contactId);
    });
  };

  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase().trim())
  );

  return (
    <>
      <h1 className="main-title">Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filterContacts} onFilter={setFilterContacts} />
      <ContactList
        contactList={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </>
  );
};

export default App;
