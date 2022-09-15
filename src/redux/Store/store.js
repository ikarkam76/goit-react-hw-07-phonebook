import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from 'redux/Slices/FilterSlice';
import { contactsSlise } from 'redux/Slices/ContactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlise.reducer,
    filter: filterSlice.reducer,
  },
});
