import { Link } from 'react-router-dom';

import s from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <section className={('container', s.section)}>
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
