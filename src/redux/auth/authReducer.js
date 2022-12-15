import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const initialServiceState = {
  id: null,
  name: null,
  email: null,
  address: null,
  phoneNumber: null,
  workHours: null,
  city: null,
  country: null,
};

const serviceInfo = createReducer(initialServiceState, {
  'service/login/pending': () => ({ ...initialServiceState }),
  'service/login/fulfilled': (_, { payload }) => ({ ...payload.successObject }),
  'service/login/rejected': () => ({ ...initialServiceState }),

  'service/logout/fulfilled': () => ({ ...initialServiceState }),
});

const isLoading = createReducer(false, {
  'service/login/pending': () => true,
  'service/login/fulfilled': () => false,
  'service/login/rejected': () => false,
});

const error = createReducer(null, {
  'service/login/pending': () => null,
  'service/login/fulfilled': () => {
    toast.success('Successfully logged in!', {
      autoClose: 2300,
    });
    return null;
  },
  'service/login/rejected': (_, action) => {
    toast.error('Wrong email or password', {
      autoClose: 2300,
    });
    return action?.error?.message;
  },
});

export const loginServiceReducer = combineReducers({
  isLoading,
  error,
  serviceInfo,
});
