import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: {value: []},
  reducers: {
    add(state, action) {
      state.value.push(action.payload);
    },
    remove(state, action) {
      state.value = state.value.filter(item => item.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlise.reducer,
);


export const { add, remove } = contactsSlise.actions;

export const getContacts = state => state.contacts.value;