import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import {
  // getOrdersByEcoserviceIdOperation,
  getOrdersOperation,
  patchOrderOperation,
} from 'redux/orders/orderOperations';
import { isLoggined } from 'redux/auth/authSelectors';
import { ordersArray } from 'redux/orders/orderSelectors';

import s from './OrdersBoardPage.module.scss';

const OrdersBoardPage = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const ecoserviceId = useSelector(isLoggined);
  const allOrders = useSelector(ordersArray);

  console.log(ecoserviceId);

  useEffect(() => {
    // dispatch(getOrdersByEcoserviceIdOperation(ecoserviceId));
    dispatch(getOrdersOperation(ecoserviceId));
  }, [dispatch, ecoserviceId]);

  const handleStatusChange = (event) => {
    dispatch(patchOrderOperation({ orderId: event.target.id, newStatus: event.target.value }));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const formatDate = (date) => {
    const objectDate = new Date(date);
    const day = objectDate.getDate();
    const month = objectDate.getMonth() + 1;
    const year = objectDate.getFullYear();
    const hours = objectDate.getHours();
    const minutes = objectDate.getMinutes();
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const filterSubmit = (event) => {
    event.preventDefault();
  };

  const tableBody = allOrders.map((order) => {
    return (
      // <tr key={order.orderId}>
      <tr key={uuidv4()}>
        <td className={s.tableCeil}>{order.orderId}</td>
        <td className={s.tableCeil}>{formatDate(order.orderTime)}</td>
        <td className={s.tableCeil}>{order.customerName}</td>
        <td className={s.tableCeil}>{order.customerPhone}</td>
        <td className={s.tableCeil}>{order.customerEmail}</td>
        <td className={s.tableCeil}>{order.description}</td>
        <td className={s.tableCeil}>
          {/* <select name="status" id={order.orderId} value={order.status} onChange={handleChange}> */}
          <select name="status" id={uuidv4()} value={order.status} onChange={handleStatusChange}>
            <option value="OPEN">OPEN</option>
            <option value="REVIEW">REVIEW</option>
            <option value="APPROVED">APPROVED</option>
            <option value="REJECTED">REJECTED</option>
            <option value="FULFILLED">FULFILLED </option>
          </select>
        </td>
      </tr>
    );
  });

  return (
    <main className={s.dashboard}>
      <section className="container">
        <h1 className={s.pageTitle}>Orders dashboard</h1>
        <form action="#" className={s.findForm} onSubmit={filterSubmit}>
          <input
            type="text"
            name="filter"
            className={s.filter}
            value={filter}
            onChange={handleFilterChange}
          />
          <button className={s.filterBtn}>Find order</button>
        </form>
        <table>
          <thead>
            <tr>
              <th className={s.tableHeader}>Order id</th>
              <th className={s.tableHeader}>Date of the order</th>
              <th className={s.tableHeader}>Customer</th>
              <th className={s.tableHeader}>Phone</th>
              <th className={s.tableHeader}>Email</th>
              <th className={s.tableHeader}>Description</th>
              <th className={s.tableHeader}>Status</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </section>
    </main>
  );
};

export default OrdersBoardPage;
