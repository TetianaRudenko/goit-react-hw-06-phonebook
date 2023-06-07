import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction('counter/increment');
console.log(increment());

const myReducer = createReducer(0, {})

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
})