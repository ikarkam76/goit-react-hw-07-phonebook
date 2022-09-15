import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change(_, action) {
      return action.payload;
    },
  },
});

export const { change } = filterSlice.actions;

export const getFilter = state => state.filter;