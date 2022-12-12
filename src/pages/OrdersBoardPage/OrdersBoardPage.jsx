import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import OrdersTable from 'modules/OrdersTable';

import { getOrdersOperation } from 'redux/orders/orderOperations';
import { getFilteredWastePointsOperation } from 'redux/wastePoints/wastePointsOperations';
import { isLoggined } from 'redux/auth/authSelectors';
import { ordersArray } from 'redux/orders/orderSelectors';

import s from './OrdersBoardPage.module.scss';
import { wastePointsArray } from 'redux/wastePoints/wastePointsSelectors';

const OrdersBoardPage = () => {
  const [filter, setFilter] = useState('');

  // const [currentOrders, setCurrentOrders] = useState([]);

  const dispatch = useDispatch();

  const ecoserviceId = useSelector(isLoggined);
  const allOrders = useSelector(ordersArray);
  const allWastePoints = useSelector(wastePointsArray);

  useEffect(() => {
    dispatch(getOrdersOperation());
    dispatch(getFilteredWastePointsOperation());
  }, [dispatch, ecoserviceId]);

  function getEcoserviceOrders() {
    const ecoServiceOrders = allOrders.filter((order) => {
      let isIncludes = false;
      for (let i = 0; i < selectedWastePoints.length; i += 1) {
        if (selectedWastePoints[i].id === order.wasteId) {
          isIncludes = true;
          break;
        }
      }
      return isIncludes;
    });

    return ecoServiceOrders;
  }

  const selectedWastePoints = allWastePoints.filter((item) => item.ecoServiceId === ecoserviceId);

  let currentOrders = getEcoserviceOrders();

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  function filterSubmit(event) {
    event.preventDefault();

    dispatch(getOrdersOperation());
    dispatch(getFilteredWastePointsOperation());

    if (event.target.value) {
      const filteredArray = currentOrders.filter(
        (order) =>
          order.id === event.target.value || order.customerName.isIncludes(event.target.value),
      );

      currentOrders = [...filteredArray];
    }
  }

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
        <OrdersTable ordersArray={currentOrders} />
      </section>
    </main>
  );
};

export default OrdersBoardPage;
