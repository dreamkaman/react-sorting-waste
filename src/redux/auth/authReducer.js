import { createReducer } from '@reduxjs/toolkit';
import * as authActions from './authActions';

const userReducer = createReducer({
  id: null,
  name: '',
  email: '',
  address: '',
  phoneNumber: '',
  workHours: '',
  city: '',
  country: '',
  free: '',
  delivery: '',
});
