import styles from './RegistrationForm.module.scss';
import image from '../../images/loginBackground.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Field, Form, Formik } from 'formik';
import classnames from 'classnames';
import * as yup from 'yup';

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

const RegistrationForm = () => {
  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.headerContainer} style={{ backgroundImage: `url(${image})` }}>
        <FontAwesomeIcon className={styles.closeIcon} icon={faXmark} />
        <span>Login</span>
      </div>

      <Formik
        initialValues={{
          email: '',
          waste: 'plastic',
          option: 'free',
          password: '',
          toggle: false,
        }}
        onSubmit={(values) => {
          console.log('submit', values);
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div className={styles.fieldsContainer}>
              <label className={classnames(styles.label)}>Company name</label>
              <Field
                className={classnames(styles.field)}
                name="company"
                type="text"
                placeholder="Enter company name"
                validate={validateEmail}
              />
            </div>

            <div className={classnames(styles.errorMessage)}></div>

            <div className={styles.fieldsContainer}>
              <label
                className={classnames(styles.label, {
                  [styles.errorLabel]: errors.email && touched.email,
                })}
              >
                Email:
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

            <div className={styles.fieldsContainer}>
              <label className={classnames(styles.label)}>Phone:</label>
              <Field
                className={classnames(styles.field)}
                name="phone"
                type="phone"
                placeholder="Enter phone"
                /*validate={validateEmail}*/
              />
            </div>

            <div
              className={classnames(styles.errorMessage, {
                [styles.errorMessageActive]: errors.email && touched.email,
              })}
            >
              {errors.email}
            </div>

            <div className={styles.fieldsContainer}>
              <label className={classnames(styles.label)}>country</label>
              <Field
                className={classnames(styles.field)}
                name="country"
                type="country"
                placeholder="Enter country"
                /*validate={validateEmail}*/
              />
            </div>

            <div
              className={classnames(styles.errorMessage, {
                [styles.errorMessageActive]: errors.email && touched.email,
              })}
            >
              {errors.email}
            </div>

            <div className={styles.fieldsContainer}>
              <label className={classnames(styles.label)}>City</label>
              <Field
                className={classnames(styles.field)}
                name="city"
                type="city"
                placeholder="Enter city"
                /*validate={validateEmail}*/
              />
            </div>

            <div
              className={classnames(styles.errorMessage, {
                [styles.errorMessageActive]: errors.email && touched.email,
              })}
            >
              {errors.email}
            </div>

            <div className={styles.fieldsContainer}>
              <label className={classnames(styles.label)}>Street</label>
              <Field
                className={classnames(styles.field)}
                name="street"
                type="street"
                placeholder="Enter street"
                /*validate={validateEmail}*/
              />
            </div>

            <div
              className={classnames(styles.errorMessage, {
                [styles.errorMessageActive]: errors.email && touched.email,
              })}
            >
              {errors.email}
            </div>

            <div className={styles.fieldsContainer}>
              <label className={classnames(styles.label)}>Type of waste</label>

              <Field name="waste" as="select" className={classnames(styles.field)}>
                <option value="plastic">plastic</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>
            <div className={classnames(styles.errorMessage)}></div>

            <div className={styles.fieldsContainer}>
              <label className={classnames(styles.label)}>Delivery condition option</label>

              <Field name="option" as="select" className={classnames(styles.field)}>
                <option value="free">free</option>
                <option value="paid">paid</option>
              </Field>
            </div>

            <div className={classnames(styles.errorMessage)}></div>

            <div className={styles.fieldsContainer}>
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

export default RegistrationForm;
