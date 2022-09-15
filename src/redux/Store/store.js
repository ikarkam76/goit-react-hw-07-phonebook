import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from 'redux/Slices/FilterSlice';
import { contactsApi } from 'redux/Slices/ContactsSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ]
});

setupListeners(store.dispatch);
