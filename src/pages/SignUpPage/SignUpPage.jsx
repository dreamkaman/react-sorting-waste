import React from 'react';
import classnames from 'classnames';
import styles from '../SignUpPage/SignUpPage.module.scss';
import RegistrationForm from '../../modules/RegistrationForm';

const SignUpPage = () => {
  return (
    <main className={classnames('container', styles.formContainer )}>

      <RegistrationForm/>

    </main>
  );
};

export default SignUpPage;