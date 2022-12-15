import { createReducer, combineReducers } from '@reduxjs/toolkit';

const entities = createReducer([], {
  'orders/get/pending': () => [],
  'orders/get/fulfilled': (_state, { payload }) => [...payload?.successObject],
  'orders/get/rejected': (state) => state,
  'ordersByEcoServiceId/get/pending': () => [],
  'ordersByEcoServiceId/get/fulfilled': (_state, { payload }) => [...payload?.successObject],
  'ordersByEcoServiceId/get/rejected': (state) => state,
  'order/post/pending': (state) => state,
  'order/post/fulfilled': (state, { payload }) => [...state, payload?.successObject],
  'order/post/rejected': (state) => state,
  'order/patch/pending': (state) => state,
  'order/patch/fulfilled': (state, { payload }) => {
    console.log(payload);
    const patchedOrder = payload.successObject;
    const newState = state.map((item) =>
      item.id === patchedOrder.id ? { ...item, status: patchedOrder.status } : item,
    );
    return newState;
  },
  'order/patch/rejected': (state) => state,

  'filteredOrders/get/pending': (state) => state,
  'filteredOrders/get/fulfilled': (state, { payload }) =>
    state.filter((order) => order.id === Number(payload) || order.customerName.includes(payload)),
  'filteredOrders/get/rejected': (state) => state,
});

const isLoading = createReducer(false, {
  'orders/get/pending': () => true,
  'orders/get/fulfilled': () => false,
  'orders/get/get/rejected': () => false,
  'ordersByEcoServiceId/get/pending': () => true,
  'ordersByEcoServiceId/get/fulfilled': () => false,
  'ordersByEcoServiceId/rejected': () => false,
  'order/post/pending': () => true,
  'order/post/fulfilled': () => false,
  'order/post/rejected': () => false,
  'order/patch/pending': () => true,
  'order/patch/fulfilled': () => false,
  'order/patch/rejected': () => false,
});

const error = createReducer(null, {
  'orders/get/pending': () => null,
  'orders/get/fulfilled': () => null,
  'orders/get/rejected': (_, action) => action?.error?.message,
  'ordersByEcoServiceId/get/pending': () => null,
  'ordersByEcoServiceId/get/fulfilled': () => null,
  'ordersByEcoServiceId/get/rejected': (_, action) => action?.error?.message,
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
