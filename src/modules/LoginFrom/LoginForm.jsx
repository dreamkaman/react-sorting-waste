import { ErrorMessage, Field, Form, Formik } from 'formik';

import styles from './LoginForm.module.scss';
import { validate } from 'uuid';
import classnames from 'classnames';

import image from '../../images/loginBackground.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const validateEmail = (value) => {
  if (!value) {
    return 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return "Invalid email address. Example: 'example@mail.com'";
  }
};

const validatePassword = (value) => {
  if (!value) {
    return 'Required';
  } else if (
    !/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(value)
  ) {
    return "Invalid password. Example:'a0A#ccsxcvx'";
  }
};

const LoginForm = () => {
  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.headerContainer} style={{ backgroundImage: `url(${image})` }}>
        <FontAwesomeIcon className={styles.closeIcon} icon={faXmark} />
        <span>Login</span>
      </div>

      <Formik
        initialValues={{
          email: '',
          password: '',
          toggle: false,
        }}
        onSubmit={(values) => {
          console.log('submit', values);
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div className={styles.emailContainer}>
              <label
                className={classnames(styles.label, {
                  [styles.errorLabel]: errors.email && touched.email,
                })}
              >
                Email
              </label>
              <Field
                className={classnames(styles.field, {
                  [styles.errorField]: errors.email && touched.email,
                })}
                name="email"
                type="email"
                placeholder="Enter email"
                validate={validateEmail}
              />
            </div>

            <div
              className={classnames(styles.errorMessage, {
                [styles.errorMessageActive]: errors.email && touched.email,
              })}
            >
              {errors.email}
            </div>

            <div className={styles.passwordContainer}>
              <label
                className={classnames(styles.label, {
                  [styles.errorLabel]: errors.password && touched.password,
                })}
              >
                Password
              </label>
              <Field
                className={classnames(styles.field, {
                  [styles.errorField]: errors.password && touched.password,
                })}
                name="password"
                type={values.toggle ? 'text' : 'password'}
                placeholder="Enter password"
                validate={validatePassword}
              />
            </div>

            <div
              className={classnames(styles.errorMessage, {
                [styles.errorMessageActive]: errors.password && touched.password,
              })}
            >
              {errors.password}
            </div>

            <div className={styles.toolsContainer}>
              <label>
                <Field type="checkbox" name="toggle" />
                Show password
              </label>

              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
