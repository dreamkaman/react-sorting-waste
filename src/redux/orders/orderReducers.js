import { createReducer, combineReducers } from '@reduxjs/toolkit';

const entities = createReducer([], {
  'ordersByEcoServiceId/pending': () => [],
  'ordersByEcoServiceId/fulfilled': (_state, { payload }) => [...payload?.successObject],
  'ordersByEcoServiceId/rejected': (state, _) => state,
  'order/post/pending': (state, _action) => state,
  'order/post/fulfilled': (state, { payload }) => [...state, payload?.successObject],
  'order/post/rejected': (state, _action) => state,
  'order/patch/pending': (state, _action) => state,
  'order/patch/fulfilled': (state, { payload }) => {
    const patchedOrder = payload.successObject;
    const newState = state.map((item) =>
      item.orderId === patchedOrder.orderId ? { ...item, status: patchedOrder.status } : item,
    );
    return newState;
  },
  'order/patch/rejected': (state, _action) => state,
});

const isLoading = createReducer(false, {
  'ordersByEcoServiceId/pending': () => true,
  'ordersByEcoServiceId/fulfilled': () => false,
  'ordersByEcoServiceId/rejected': () => false,
  'order/post/pending': () => true,
  'order/post/fulfilled': () => false,
  'order/post/rejected': () => false,
  'order/patch/pending': () => true,
  'order/patch/fulfilled': () => false,
  'order/patch/rejected': () => false,
});

const error = createReducer(null, {
  'ordersByEcoServiceId/pending': () => null,
  'ordersByEcoServiceId/fulfilled': () => null,
  'ordersByEcoServiceId/rejected': (_, action) => action?.error?.message,
  'order/post/pending': () => null,
  'order/post/fulfilled': () => null,
  'order/post/rejected': () => (_, action) => action?.error?.message,
  'order/patch/pending': () => null,
  'order/patch/fulfilled': () => null,
  'order/patch/rejected': () => (_, action) => action?.error?.message,
});

export const ordersReducer = combineReducers({
  entities,
  isLoading,
  error,
});
