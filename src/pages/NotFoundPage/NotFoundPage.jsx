import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/auth/authOperations';

import { Link } from 'react-router-dom';

import s from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const dispatch = useDispatch();
  const testValues = {
    name: 'Test ECO Servise 2',
    email: 'test9@gmail.com',
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

  function handleClick(values) {
    const {
      name,
      email,
      password,
      address,
      phoneNumber,
      workHours,
      photo,
      city,
      country,
      free,
      delivery,
    } = values;
    console.log(email, password);
    console.log(
      dispatch(
        authOperations.signupServiceOperation({
          name,
          email,
          password,
          address,
          phoneNumber,
          workHours,
          photo,
          city,
          country,
          free,
          delivery,
        }),
      ),
    );
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
