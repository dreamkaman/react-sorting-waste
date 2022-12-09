import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getOrdersByEcoserviceIdOperation } from 'redux/orders/orderOperations';
import { isLoggined } from 'redux/auth/authSelectors';
import { ordersArray } from 'redux/orders/orderSelectors';

import s from './OrdersBoardPage.module.scss';

const OrdersBoardPage = () => {
  const dispatch = useDispatch();
  const ecoserviceId = useSelector(isLoggined);
  const allOrders = useSelector(ordersArray);

  useEffect(() => {
    dispatch(getOrdersByEcoserviceIdOperation(ecoserviceId));
  }, [dispatch, ecoserviceId]);

  const tableBody = allOrders.map((order) => {
    return (
      <tr key={order.orderId}>
        <td className={s.tableCeil}>{order.orderId}</td>
        <td className={s.tableCeil}>{'-'}</td>
        <td className={s.tableCeil}>{order.customerName}</td>
        <td className={s.tableCeil}>{'-'}</td>
        <td className={s.tableCeil}>{order.customerEmail}</td>
        <td className={s.tableCeil}>{order.description}</td>
        <td className={s.tableCeil}>{order.status}</td>
      </tr>
    );
  });

  console.log(tableBody);

  return (
    <main className={s.dashboard}>
      <section className="container">
        <h1 className={s.pageTitle}>Orders dashboard</h1>
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
