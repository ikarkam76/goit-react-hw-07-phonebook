import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Item, List } from 'components/ContactList/ContactList.styled';
import { getContacts, remove } from "redux/Slices/ContactsSlice";
import { getFilter } from "redux/Slices/FilterSlice";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  if (!contacts[0]) {
    return;
  }
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <List>
        {filteredContacts.map(contact => (
          <Item key={contact.id}>
            <p>{contact.name}: {contact.number}</p>
            <button onClick={()=>dispatch(remove(contact.id))}>Delete</button>
          </Item>
        ))}
      </List>
    );
};


export default ContactList;