import React from "react";
import { useSelector } from "react-redux";
import { Contact, ContactName, ContactTel, DeleteButton, Item, List } from 'components/ContactList/ContactList.styled';
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
              <Contact>
                <ContactName>{contact.name}</ContactName>
                <ContactTel>📞: {contact.phone}</ContactTel>
              </Contact>
              <DeleteButton
                type="button"
                onClick={() => deleteContact(contact.id)}
              >
                {!isLoading ? '...' : 'DELETE'}
              </DeleteButton>
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