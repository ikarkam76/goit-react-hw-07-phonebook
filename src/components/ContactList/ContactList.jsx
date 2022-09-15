import React from "react";

import { Item, List } from 'components/ContactList/ContactList.styled';
import { useFetchContactsQuery, useDeleteContactMutation } from "redux/Slices/ContactsSlice";
import { Loader } from "components/Loader/Loader";
// import { getFilter } from "redux/Slices/FilterSlice";

function ContactList() {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  // const filteredContacts = data.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <List>
      {isFetching && <Loader />}
      {contacts &&
        contacts.map(contact => (
          <Item key={contact.id}>
            <p>
              {contact.name}: {contact.phone}
            </p>
            <button type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </button>
          </Item>
        ))}
    </List>
  );
}


export default ContactList;