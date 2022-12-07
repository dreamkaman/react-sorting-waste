import { createReducer, combineReducers } from '@reduxjs/toolkit';

export const initialServiceState = {
  id: null,
  name: null,
  email: null,
  address: null,
  phoneNumber: null,
  workHours: null,
  city: null,
  country: null,
  free: null,
  delivery: null,
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
  'service/login/fulfilled': () => null,
  'service/login/rejected': (_, action) => action?.error?.message,
});

export const loginServiceReducer = combineReducers({
  isLoading,
  error,
  serviceInfo,
});
