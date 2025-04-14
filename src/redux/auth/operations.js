import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthHeader = value => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk('auth/register', async (registrationdata, thunkAPI) => {
  console.log(registrationdata);

  try {
    const response = await axios.post('/users/signup', registrationdata);
    setAuthHeader(`Bearer ${response.data.token}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async (registrationdata, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', registrationdata);
    setAuthHeader(`Bearer ${response.data.token}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post('/users/logout');
  setAuthHeader('');
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      setAuthHeader(`Bearer ${reduxState.data.token}`);

      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.data.token !== null;
    },
  }
);

//Larysa   seagull2610@gmail.com   123456789

//poly   k@k.com   123456789

//Igor   sss@kjhkgf.com 123456789
