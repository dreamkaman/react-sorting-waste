import LoginForm from '../../modules/LoginFrom';

import styles from './LoginPage.module.scss';
import classnames from 'classnames';

const LoginPage = () => {
  return (
    <main className={classnames('container', styles.formContainer)}>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
