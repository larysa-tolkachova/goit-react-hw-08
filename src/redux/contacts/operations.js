import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('/contacts/fetchContacts', async (_, thunkAPI) => {
  try {
    const responce = await axios.get('/contacts');
    return responce.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('/contacts/addContact', async (newContact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', newContact);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('/contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
