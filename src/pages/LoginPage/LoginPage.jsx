import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../../modules/LoginFrom';

import styles from './LoginPage.module.scss'
import classnames from 'classnames';

const LoginPage = () => {
  const navigation = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';

  return (
    <main className={classnames('container', styles.formContainer )}>

      <LoginForm/>

      {/*
      <p>You came from - {fromPage}</p>*/}
    </main>
  );
};

export default LoginPage;
