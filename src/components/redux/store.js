import { configureStore, combineReducers } from "@reduxjs/toolkit";
//import { rootReducer } from "./reducer";


import {  contactsReducer, } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };

//    import { createStore } from "redux";
//    import { devToolsEnhancer } from "@redux-devtools/extension";
//    //import { statusFilter } from "./constants";
//    
//    import { rootReducer } from "./reducer";
//    
//    
//    // Початкове значення стану Redux для кореневого редюсера,
//    // якщо не передати параметр preloadedState.
//    //   const initialState = {
//    //     contacts: [
//    //       { id: 0, text: "Learn HTML and CSS", completed: true },
//    //       { id: 1, text: "Get good at JavaScript", completed: true },
//    //       { id: 2, text: "Master React", completed: false },
//    //       { id: 3, text: "Discover Redux", completed: false },
//    //       { id: 4, text: "Build amazing apps", completed: false },
//    //     ],
//    //     filter: {
//    //       status: statusFilter.all,
//    //     },
//    //   };
//    //   
//    //   // Поки що використовуємо редюсер який
//    //   // тільки повертає отриманий стан
//    //   const rootReducer = (state = initialState, action) => {
//    //     return state;
//    //   };
//    
//    // Створюємо розширення стора, щоб додати інструменти розробника
//    const enhancer = devToolsEnhancer();
//    
//    export const store = createStore(rootReducer, enhancer);
//    





















