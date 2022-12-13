import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import OrdersTable from 'modules/OrdersDashboardTable';

import { getOrdersOperation, getFilteredOrdersOperation } from 'redux/orders/orderOperations';
import { getWastePointsByEcoServiceIdOperation } from 'redux/wastePoints/wastePointsOperations';
import { isLoggined } from 'redux/auth/authSelectors';
import { ordersArray } from 'redux/orders/orderSelectors';
import { wastePointsArray } from 'redux/wastePoints/wastePointsSelectors';

import s from './OrdersBoardPage.module.scss';

const OrdersBoardPage = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const ecoserviceId = useSelector(isLoggined);
  const allOrders = useSelector(ordersArray);
  const allWastePoints = useSelector(wastePointsArray);

  useEffect(() => {
    dispatch(getOrdersOperation());
    dispatch(getWastePointsByEcoServiceIdOperation(ecoserviceId));
  }, [dispatch, ecoserviceId]);

  function getEcoserviceOrders() {
    const filteredEcoServiceOrders = allOrders.filter((order) => {
      let isIncludes = false;
      for (let i = 0; i < allWastePoints.length; i += 1) {
        if (allWastePoints[i].id === order.wasteId) {
          isIncludes = true;
          break;
        }
      }
      return isIncludes;
    });

    return filteredEcoServiceOrders;
  }

  const currentOrders = getEcoserviceOrders();

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  function filterSubmit(event) {
    event.preventDefault();

    const filter = event.target[0].value;
    if (filter) {
      dispatch(getFilteredOrdersOperation(filter));
    } else {
      dispatch(getOrdersOperation());
      dispatch(getWastePointsByEcoServiceIdOperation(ecoserviceId));
    }
  }

  function onResetFilter() {
    setFilter('');
    dispatch(getOrdersOperation());
    dispatch(getWastePointsByEcoServiceIdOperation(ecoserviceId));
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
          <div className={s.filterBtnWrapper}>
            <button className={s.filterBtn}>Find order</button>
            <button className={s.filterBtn} type="button" onClick={onResetFilter}>
              Reset filter
            </button>
          </div>
        </form>
        <div className={s.wrapper}>
          <OrdersTable ordersArray={currentOrders} />
        </div>
      </section>
    </main>
  );
};

export default OrdersBoardPage;
