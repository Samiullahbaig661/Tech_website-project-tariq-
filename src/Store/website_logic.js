// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import contactFormReducer from './Slice_ContactForm';
import teamReducer from './teamslice';

const store = configureStore({
  reducer: {
    team : teamReducer,
    contactform: contactFormReducer
  }
});

export default store;
