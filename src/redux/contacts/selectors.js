import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectNumberFilter } from "../filters/selectors"

export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;


export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter, selectNumberFilter],
    (contacts, searchValueByName, searchValueByNumber) => {
        return contacts.filter(contact => 
            contact.name.toLowerCase().includes(searchValueByName.toLowerCase()) && contact.number.toLowerCase().includes(searchValueByNumber.toLowerCase())
        );
    }
);