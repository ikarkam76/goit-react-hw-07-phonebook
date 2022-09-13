import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const add = createAction('contacts/add');
export const remove = createAction('contacts/remove');

const myReducer = createReducer([], {
    [add]: (state, action) => [...state, action.payload],
    [remove]: (state, action) => state.filter(item => item.id !== action.payload)
});

export const store = configureStore({
    reducer: {
        contacts: myReducer,
  },
});