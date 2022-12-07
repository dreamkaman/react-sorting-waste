import { useDispatch } from 'react-redux';
import * as servicesOperations from 'redux/services/servicesOperations';
import * as wastePointOperations from 'redux/wastePoints/wastePointsOperations';
import * as authOperations from 'redux/auth/authOperations';

import { Link } from 'react-router-dom';

import s from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const dispatch = useDispatch();

  const testValues = {
    name: 'Test ECO Servise 2',
    email: 'testik6@gmail.com',
    password: 'Rhdkshn#01',
    address: '5, Adriano Chelentano street',
    phoneNumber: '+380671234567',
    workHours: '9.00-18.00',
    photo: 'string',
    city: 'Kyiv',
    country: 'Ukraine',
    free: true,
    delivery: true,
  };

  function handleClick(ecoServiceObject) {
    // dispatch(servicesOperations.signupServiceOperation(ecoServiceObject));
    // dispatch(servicesOperations.getServicesOperation());
    // dispatch(servicesOperations.deleteServiceOperation(11));
    // dispatch(wastePointOperations.getWastePointsOperation());
    dispatch(wastePointOperations.getFilteredWastePointsOperation({ types: ['paper'] }));
    // dispatch(
    //   authOperations.loginServiceOperation({ email: 'testik1@gmail.com', password: 'Rhdkshn#01' }),
    // );
  }
  return (
    <section className={('container', s.section)}>
      <button onClick={() => handleClick(testValues)}>Test button</button>
      <p className={s.first}>Oops, the page you're looking for cannot be found.</p>
      <p className={s.second}>
        Please make sure you entered the URL properly, hit the Back button or go to the{' '}
        <Link to="/">
          <span className={s.link}>Homepage</span>
        </Link>
        .
      </p>
    </section>
  );
};

export default NotFoundPage;
