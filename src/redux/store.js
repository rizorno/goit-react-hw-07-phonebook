import { configureStore } from '@reduxjs/toolkit';
// import { contactApi } from './contact-api';
// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
});
