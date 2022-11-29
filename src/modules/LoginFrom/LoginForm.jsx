import { ErrorMessage, Field, Form, Formik } from 'formik';

import styles from './LoginForm.module.scss';
import { validate } from 'uuid';
import classnames from 'classnames';

const validateEmail = (value) => {
  if (!value) {
    return 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return  'Invalid email address';
  }
}

const validatePassword = (value) => {
  if (!value) {
    return 'Required';
  } else if (/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(value)) {
    return  'Invalid password';
  }
}

const LoginForm = () => {
  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.log('submit', values);
        }}
      >
        {({ errors, touched }) => (
          <Form>

            <label className={classnames(styles.label, {[styles.errorLabel]: errors.email && touched.email})}>
              Email
            </label>
            <Field
              className={classnames(styles.field, {[styles.errorField]: errors.email && touched.email})}
              name="email" type="email" validate={validateEmail}/>
            {errors.email && touched.email && (<div className={styles.errorMessage}>
              {errors.email}</div>)}

            <label className={classnames(styles.label, {[styles.errorLabel]: errors.password && touched.password})}>
              Password
            </label>
            <Field
              className={classnames(styles.field, {[styles.errorField]: errors.password && touched.password})}
              name="password" type="password" validate={validatePassword()}/>
            {errors.password && touched.password && (<div className={styles.errorMessage}>
              {errors.password}</div>)}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
