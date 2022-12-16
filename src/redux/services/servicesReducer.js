import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const isLoading = createReducer(false, {
  'services/get/pending': () => true,
  'services/get/fulfilled': () => false,
  'services/get/rejected': () => false,
  'service/signup/pending': () => true,
  'service/signup/fulfilled': () => false,
  'service/signup/rejected': () => false,
  'service/changePassword/pending': () => true,
  'service/changePassword/fulfilled': () => false,
  'service/changePassword/rejected': () => false,

  'service/changeInfo/pending': () => true,
  'service/changeInfo/fulfilled': () => false,
  'service/changeInfo/rejected': () => false,
});

const error = createReducer(null, {
  'services/get/pending': () => null,
  'services/get/fulfilled': () => null,
  'services/get/rejected': (_, action) => action?.error?.message,

  'service/signup/pending': () => null,
  'service/signup/fulfilled': () => {
    return null;
  },
  'service/signup/rejected': (_, action) => {
    return action?.error?.message;
  },

  'service/changePassword/pending': () => null,
  'service/changePassword/fulfilled': () => {
    toast.success('You have successfully changed your password', {
      autoClose: 2300,
    });
    return null;
  },
  'service/changePassword/rejected': (_, action) => {
    toast.error('Wrong old password', {
      autoClose: 2300,
    });
    return action?.error?.message;
  },

  'service/changeInfo/pending': () => null,
  'service/changeInfo/fulfilled': () => null,
  'service/changeInfo/rejected': (_, action) => action?.error?.message,
});

const entities = createReducer([], {
  'services/get/pending': () => [],
  'services/get/fulfilled': (_, { payload }) => [...payload?.successObject],
  'services/get/rejected': (state) => state,

  'service/signup/pending': (state) => state,
  'service/signup/fulfilled': (state, { payload }) => {
    const newState = [...state, payload?.successObject];
    toast.success('Account registered', {
      autoClose: 2300,
    });
    return newState;
  },
  'service/signup/rejected': (state) => {
    toast.error('Email already registered', {
      autoClose: 2300,
    });
    return state;
  },

  'service/delete/pending': (state) => state,
  'service/delete/fulfilled': (state, { payload }) => state.filter((item) => item.id !== payload),
  'service/delete/rejected': (state) => state,

  'service/changePassword/pending': (state) => state,
  'service/changePassword/fulfilled': (state) => {
    toast.success('You have successfully changed your password', {
      autoClose: 2300,
    });
    return state;
  },
  'service/changePassword/rejected': (state) => {
    toast.error('Wrong old password', {
      autoClose: 2300,
    });
    return state;
  },

  'service/changeInfo/pending': (state) => state,
  'service/changeInfo/fulfilled': (state, { payload }) =>
    state.map((item) =>
      item.id === payload?.successObject?.id ? { ...payload?.successObject } : item,
    ),
  'service/changeInfo/rejected': (state) => state,
});

export const servicesReducer = combineReducers({
  entities,
  isLoading,
  error,
});
