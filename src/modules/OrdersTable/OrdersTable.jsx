import { useDispatch } from 'react-redux';

import { patchOrderOperation } from 'redux/orders/orderOperations';

import s from './OrdersTable.module.scss';

const OrdersTable = ({ ordersArray }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (event) => {
    dispatch(patchOrderOperation({ orderId: event.target.id, newStatus: event.target.value }));
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

  const tableBody = ordersArray.map((order) => {
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
  );
};

export default OrdersTable;
