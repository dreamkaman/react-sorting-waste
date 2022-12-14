import { combineReducers, createReducer } from '@reduxjs/toolkit';

const entities = createReducer([], {
  'services/get/pending': () => [],
  'services/get/fulfilled': (_, { payload }) => [...payload?.successObject],
  'services/get/rejected': (state) => state,
  'service/signup/pending': (state) => state,
  'service/signup/fulfilled': (state, { payload }) => [...state, payload?.successObject],
  'service/signup/rejected': (state) => state,
  'service/delete/pending': (state) => state,
  'service/delete/fulfilled': (state, { payload }) => state.filter((item) => state.id !== payload),
  'service/delete/rejected': (state) => state,

  'service/changePassword/pending': (state) => state,
  'service/changePassword/fulfilled': (state) => state,
  'service/changePassword/rejected': (state) => state,

  'service/changeInfo/pending': (state) => state,
  'service/changeInfo/fulfilled': (state, { payload }) =>
    state.map((item) =>
      item.id === payload?.successObject?.id ? { ...payload?.successObject } : item,
    ),
  'service/changeInfo/rejected': (state) => state,
});

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
  'service/signup/fulfilled': () => null,
  'service/signup/rejected': (_, action) => action?.error?.message,

  'service/changePassword/pending': () => null,
  'service/changePassword/fulfilled': () => null,
  'service/changePassword/rejected': (_, action) => action?.error?.message,

  'service/changeInfo/pending': () => null,
  'service/changeInfo/fulfilled': () => null,
  'service/changeInfo/rejected': (_, action) => action?.error?.message,
});

export const servicesReducer = combineReducers({
  entities,
  isLoading,
  error,
});
