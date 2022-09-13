import React from "react";
import {Item, List} from "components/ContactList/ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "redux/store";


const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch();
  if (!contacts) {
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