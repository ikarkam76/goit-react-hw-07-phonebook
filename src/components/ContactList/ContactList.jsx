import React from "react";
import {Item, List} from "components/ContactList/ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "redux/store";


const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  if (!contacts) {
    return;
  }
    return (
      <List>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <p>{contact.name}: {contact.number}</p>
            <button onClick={()=>dispatch(remove(contact.id))}>Delete</button>
          </Item>
        ))}
      </List>
    );
};


export default ContactList;