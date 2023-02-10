import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const URL = 'http://192.168.0.89:8000/user/login';
export const loginUser = createAsyncThunk('auth/login', ({email, password}) => {
  return fetch(URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password}),
  })
    .then(res => res.json())
    .catch(err => console.log({err}));
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload.text;
    },
    changePassword: (state, action) => {
      state.password = action.payload.text;
    },
  },
  extraReducers: {
    [loginUser.pending]: state => {},
    [loginUser.fulfilled]: (state, action) => {
      console.log(state, action);
    },
    [loginUser.rejected]: state => {},
  },
});

export const {changeEmail, changePassword, testAction} = authSlice.actions;
export default authSlice.reducer;
