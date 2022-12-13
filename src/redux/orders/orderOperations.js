import { createAsyncThunk } from '@reduxjs/toolkit';
import * as goecoAPI from 'API/goeco/goecoAPI';

export const getOrdersOperation = createAsyncThunk('orders/get', async () => {
  const response = await goecoAPI.getOrders();
  return response.data;
});

export const postOrderOperation = createAsyncThunk('order/post', async (order) => {
  const response = await goecoAPI.postOrder(order);
  return response.data;
});

export const patchOrderOperation = createAsyncThunk(
  'order/patch',
  async ({ orderId, newStatus }) => {
    const response = await goecoAPI.patchOrder({ orderId, newStatus });
    return response.data;
  },
);

export const getOrdersByEcoserviceIdOperation = createAsyncThunk(
  'ordersByEcoServiceId/get',
  async (ecoserviceId) => {
    const response = await goecoAPI.getOrdersByEcoserviceId(ecoserviceId);
    return response.data;
  },
);

export const getFilteredOrdersOperation = createAsyncThunk(
  'filteredOrders/get',
  (filter) => filter,
);
