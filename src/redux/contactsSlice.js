import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import  contactsInitialState  from "../contacts.json";


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return (state = [ action.payload, ...state]);
      },
      prepare(values) {
        return {
          payload: {
            id: nanoid(),
            name: values.name,
            number: values.number,
          },
        };
      },
    },
    
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload)
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


