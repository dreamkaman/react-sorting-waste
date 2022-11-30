import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  token: '',
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, { email, token }) => {
      return {
        ...state,
        email,
        token,
      };
    },
    logoutUser: (_state) => {
      return { ...initialState };
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
