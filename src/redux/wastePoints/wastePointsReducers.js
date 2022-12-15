import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const entities = createReducer([], {
  'wastePoints/getFiltered/pending': () => [],
  'wastePoints/getFiltered/fulfilled': (_, { payload }) => [...payload?.successObject],
  'wastePoints/getFiltered/rejected': (state) => state,
  'wastePoint/post/pending': (state) => state,
  'wastePoint/post/fulfilled': (state, { payload }) => [...state, payload?.successObject],
  'wastePoint/post/rejected': (state) => state,
  'wastePointsByEcoServiceId/get/pending': () => [],
  'wastePointsByEcoServiceId/get/fulfilled': (_, { payload }) => [...payload?.successObject],
  'wastePointsByEcoServiceId/get/rejected': () => [],
});

const isLoading = createReducer(false, {
  'wastePoints/getFiltered/pending': () => true,
  'wastePoints/getFiltered/fulfilled': () => false,
  'wastePoints/getFiltered/rejected': () => false,

  'wastePoint/post/pending': () => true,
  'wastePoint/post/fulfilled': () => false,
  'wastePoint/post/rejected': () => false,

  'wastePointsByEcoServiceId/get/pending': () => true,
  'wastePointsByEcoServiceId/get/fulfilled': () => false,
  'wastePointsByEcoServiceId/get/rejected': () => false,
});

const error = createReducer(null, {
  'wastePoints/getFiltered/pending': () => null,
  'wastePoints/getFiltered/fulfilled': () => null,
  'wastePoints/getFiltered/rejected': (_, action) => action?.error?.message,

  'wastePoint/post/pending': () => null,
  'wastePoint/post/fulfilled': () => {
    toast.success('New waste point added', {
      autoClose: 2300,
    });
    toast.success('Check it out in FIND SERVICE', {
      autoClose: 2300,
    });
    return null;
  },
  'wastePoint/post/rejected': (_, action) => action?.error?.message,

  'wastePointsByEcoServiceId/get/pending': () => null,
  'wastePointsByEcoServiceId/get/fulfilled': () => null,
  'wastePointsByEcoServiceId/get/rejected': (_, action) => action?.error?.message,
});

export const wastPointsReducer = combineReducers({
  entities,
  isLoading,
  error,
});
