import React from "react";
import { useSelector } from "react-redux";
import { Item, List } from 'components/ContactList/ContactList.styled';
import { useFetchContactsQuery, useDeleteContactMutation } from "redux/Slices/ContactsSlice";
import { Loader } from "components/Loader/Loader";
import { getFilter } from "redux/Slices/FilterSlice";

function ContactList() {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact, isLoading] = useDeleteContactMutation();
  const filter = useSelector(getFilter);
  
  if (isFetching) {
    return <Loader />;
  }
  if (!contacts) {
    return;
  } else {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <List>
        {filteredContacts[0] ? (
          filteredContacts.map(contact => (
            <Item key={contact.id}>
              <p>
                {contact.name}: {contact.phone}
              </p>
              <button type="button" onClick={() => deleteContact(contact.id)}>
                {!isLoading ? '...' : 'Delete'}
              </button>
            </Item>
          ))
        ) : (
          <h4>Not found any contacts</h4>
        )}
      </List>
    );

  }

  }


export default ContactList;