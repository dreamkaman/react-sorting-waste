import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../../modules/LoginFrom';

import styles from './LoginPage.module.scss'

const LoginPage = () => {
  const navigation = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';

  return (
    <main className={styles.loginContainer}>
      <h2>Login</h2>
      <LoginForm/>

      {/*
      <p>You came from - {fromPage}</p>*/}
    </main>
  );
};

export default LoginPage;
