import { createReducer, combineReducers } from '@reduxjs/toolkit';

const initialServiceState = {
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
  'service/login/pending': (_state, action) => ({ ...initialServiceState }),
  'service/login/fulfilled': (_state, { payload }) => ({ ...payload.successObject }),
  'service/login/rejected': (_state, _action) => ({ ...initialServiceState }),
});

const isLoading = createReducer(false, {
  'service/login/pending': (_state, _action) => true,
  'service/login/fulfilled': (_state, _action) => false,
  'service/login/rejected': (_state, _action) => false,
});

const error = createReducer(null, {
  'service/login/pending': (_state, _action) => null,
  'service/login/fulfilled': (_state, _action) => null,
  'service/login/rejected': (_state, action) => action?.error?.message,
});

export const loginServiceReducer = combineReducers({
  isLoading,
  error,
  serviceInfo,
});
