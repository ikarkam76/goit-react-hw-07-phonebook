import { createSlice } from '@reduxjs/toolkit';

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: {items: []},
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = contactsSlise.actions;

export const getContacts = state => state.contacts.items;