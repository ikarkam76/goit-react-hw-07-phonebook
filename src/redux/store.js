import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlise = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        },
    }
})

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        change(state, action) {
            return state = action.payload
        }
    }
})

export const { add, remove } = contactsSlise.actions;
export const { change } = filterSlice.actions;

export const store = configureStore({
    reducer: {
        contacts: contactsSlise.reducer,
        filter: filterSlice.reducer,
  },
});
