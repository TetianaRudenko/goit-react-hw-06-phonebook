import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./components/redux/store";

import { ThemeProvider } from "styled-components";
import { theme } from "../src/components/constants/index";

import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='goit-react-hw-06-phonebook'>
      <Provider store={store}>
        <ThemeProvider theme={theme}> 
           <App />
        </ThemeProvider>
       
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
