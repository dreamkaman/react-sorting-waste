import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getOrdersOperation, patchOrderOperation } from 'redux/orders/orderOperations';
import { getFilteredWastePointsOperation } from 'redux/wastePoints/wastePointsOperations';
import { isLoggined } from 'redux/auth/authSelectors';
import { ordersArray } from 'redux/orders/orderSelectors';

import s from './OrdersBoardPage.module.scss';
import { wastePointsArray } from 'redux/wastePoints/wastePointsSelectors';
import { ordersReducer } from 'redux/orders/orderReducers';

const OrdersBoardPage = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const ecoserviceId = useSelector(isLoggined);
  const allOrders = useSelector(ordersArray);
  const allWastePoints = useSelector(wastePointsArray);

  // console.log(ecoserviceId);

  useEffect(() => {
    // dispatch(getOrdersByEcoserviceIdOperation(ecoserviceId));

    dispatch(getOrdersOperation());
    dispatch(getFilteredWastePointsOperation());
    // dispatch(getWastePointsByEcoServiceIdOperation(ecoserviceId));
  }, [dispatch, ecoserviceId]);

  const handleStatusChange = (event) => {
    dispatch(patchOrderOperation({ orderId: event.target.id, newStatus: event.target.value }));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const formatDate = (date) => {
    const objectDate = new Date(date);
    let day = objectDate.getDate();
    let month = objectDate.getMonth() + 1;
    const year = objectDate.getFullYear();
    let hours = objectDate.getHours();
    let minutes = objectDate.getMinutes();

    day = day > 9 ? day : `0${day}`;
    month = month > 9 ? month : `0${month}`;
    hours = hours > 9 ? hours : `0${hours}`;
    minutes = minutes > 9 ? minutes : `0${minutes}`;

    return `${day}/${month > 9}/${year} ${hours}:${minutes}`;
  };

  const filterSubmit = (event) => {
    event.preventDefault();
  };

  const selectedWastePoints = allWastePoints.filter((item) => item.ecoServiceId === ecoserviceId);

  const selectedOrders = allOrders.filter((order) => {
    let isIncludes = false;
    for (let i = 0; i < selectedWastePoints.length; i += 1) {
      if (selectedWastePoints[i].id === order.wasteId) {
        isIncludes = true;
        break;
      }
    }
    return isIncludes;
  });

  console.log(selectedOrders);

  const tableBody = selectedOrders.map((order) => {
    return (
      <tr key={order.id}>
        <td className={s.tableCeil}>{order.id}</td>
        <td className={s.tableCeil}>{formatDate(order.orderTime)}</td>
        <td className={s.tableCeil}>{order.customerName}</td>
        <td className={s.tableCeil}>{order.customerPhone}</td>
        <td className={s.tableCeil}>{order.customerEmail}</td>
        <td className={s.tableCeil}>{order.description}</td>
        <td className={s.tableCeil}>
          <select name="status" id={order.id} value={order.status} onChange={handleStatusChange}>
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
