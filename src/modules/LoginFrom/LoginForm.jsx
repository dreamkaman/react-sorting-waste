import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginServiceOperation } from 'redux/auth/authOperations';

import styles from './LoginForm.module.scss';

import classnames from 'classnames';

import image from 'images/backgroundForm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().required('Required').email("Invalid email. Example: 'example@mail.com'"),
  password: Yup.string()
    .required('Required')
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
      "Invalid password. Example:'a0A#ccsxcvx'",
    ),
});

const LoginForm = ({ onClose, toast }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const { email, password } = values;
          const request = await dispatch(loginServiceOperation({ email, password }));

          if (request.type === 'service/login/rejected') {
            toast.error('Wrong email or password!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            return;
          } else {
            toast.success('Logged in successfully', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            onClose();
        }
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.headerContainer} style={{ backgroundImage: `url(${image})` }}>
        <FontAwesomeIcon onClick={onClose} className={styles.closeIcon} icon={faXmark} />
        <span>Login</span>
      </div>

      <Formik
        initialValues={{
          email: '',
          password: '',
          toggle: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div className={styles.fieldsContainer}>
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

            <div className={styles.groupButtons}>
              <button type="submit">Submit</button>
              <button type="button" onClick={onClose}>
                Close
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
