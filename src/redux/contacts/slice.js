import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, updateContact } from './operations';
import { logOut } from '../auth/operations';


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: false,
     },
    extraReducers: builder => {
        builder
        .addCase(logOut.fulfilled, state => {
            state.items = [];
        })
        .addCase(fetchContacts.pending, state => {
            state.error = false,
            state.loading = true
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload,
                state.loading = false
        })
        .addCase(fetchContacts.rejected, (state) => {
            state.loading = false
            state.error = true
        })
        .addCase(addContact.pending, state => {
            state.error = false;
            state.loading = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
            state.loading = false;
        })
        .addCase(addContact.rejected, state => {
            state.loading = false;
            state.error = true;
        })
        .addCase(deleteContact.pending, state => {
            state.error = false;
            state.loading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
            state.loading = false;
        })
        .addCase(deleteContact.rejected, state => {
            state.loading = false;
            state.error = true;
        })
        .addCase(updateContact.pending, state => {
            state.error = false;
            state.loading = true;
        })
        .addCase(updateContact.fulfilled, (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
            state.loading = false;
        })
        .addCase(updateContact.rejected, state => {
            state.loading = false;
            state.error = true;
        })
    }
})

export default contactsSlice.reducer;

