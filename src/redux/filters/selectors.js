import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

const selectStatusFilter = state => state.filters.name;

export const selectVisibleContacts = createSelector([selectContacts, selectStatusFilter], (contacts, filter) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
});
