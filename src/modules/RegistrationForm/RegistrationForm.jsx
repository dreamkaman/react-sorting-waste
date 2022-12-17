import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupServiceOperation } from 'redux/services/servicesOperations';
import { signUpError } from 'redux/services/servicesSelectors';

import styles from './RegistrationForm.module.scss';
import image from 'images/backgroundForm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Field, Form, Formik } from 'formik';
import classnames from 'classnames';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required').email("Invalid email. Example: 'example@mail.com'"),
  phoneNumber: Yup.string()
    .required('Required')
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
      'Phone number is not valid',
    ),
  country: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  timeOpen: Yup.string().required('Required'),
  timeClose: Yup.string().required('Required'),
  password: Yup.string()
    .required('Required')
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
      "Invalid password. Example:'a0A#ccsxcvx'",
    ),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const ErrorField = (props) => {
  return (
    <div
      className={classnames(styles.errorMessage, {
        [styles.errorMessageActive]: props?.errors && props?.touched,
      })}
    >
      {props?.errors}
    </div>
  );
};

const RegistrationForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const isSignedUp = useSelector(signUpError);
  const isButtonPushed = useRef(false);

  useEffect(() => {
    if (isButtonPushed.current) {
      console.log(isSignedUp);
      if (!isSignedUp) {
        onClose();
      }
    }
    isButtonPushed.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedUp]);

  const handleSubmit = (values) => {
    const { timeOpen, timeClose, confirmPassword, toggle, ...data } = values;

    const body = {
      ...data,
      workHours: timeOpen + '-' + timeClose,
      photo: 'withoutPhoto',
      free: true,
      delivery: true,
    };

    dispatch(signupServiceOperation(body));

    isButtonPushed.current = true;
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.headerContainer} style={{ backgroundImage: `url(${image})` }}>
        <FontAwesomeIcon onClick={onClose} className={styles.closeIcon} icon={faXmark} />
        <span>Sign Up</span>
      </div>

      <Formik
        initialValues={{
          name: '',
          email: '',
          phoneNumber: '',
          country: '',
          city: '',
          address: '',
          timeOpen: '',
          timeClose: '',
          password: '',
          confirmPassword: '',
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
                  [styles.errorLabel]: errors.name && touched.name,
                })}
              >
                Company name
              </label>
              <Field
                className={classnames(styles.field, {
                  [styles.errorField]: errors.name && touched.name,
                })}
                name="name"
                type="text"
                placeholder="Enter company name"
              />
            </div>
            <ErrorField errors={errors.name} touched={touched.name} />

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
            <ErrorField errors={errors.email} touched={touched.email} />

            <div className={styles.fieldsContainer}>
              <label
                className={classnames(styles.label, {
                  [styles.errorLabel]: errors.phoneNumber && touched.phoneNumber,
                })}
              >
                Phone
              </label>
              <Field
                className={classnames(styles.field, {
                  [styles.errorField]: errors.phoneNumber && touched.phoneNumber,
                })}
                name="phoneNumber"
                type="text"
                placeholder="Enter phone"
              />
            </div>
            <ErrorField errors={errors.phoneNumber} touched={touched.phoneNumber} />

            <div className={styles.fieldsContainer}>
              <label
                className={classnames(styles.label, {
                  [styles.errorLabel]: errors.country && touched.country,
                })}
              >
                Country
              </label>
              <Field
                className={classnames(styles.field, {
                  [styles.errorField]: errors.country && touched.country,
                })}
                name="country"
                type="text"
                placeholder="Enter country"
              />
            </div>
            <ErrorField errors={errors.country} touched={touched.country} />

            <div className={styles.fieldsContainer}>
              <label
                className={classnames(styles.label, {
                  [styles.errorLabel]: errors.city && touched.city,
                })}
              >
                City
              </label>
              <Field
                className={classnames(styles.field, {
                  [styles.errorField]: errors.city && touched.city,
                })}
                name="city"
                type="text"
                placeholder="Enter city"
              />
            </div>
            <ErrorField errors={errors.city} touched={touched.city} />

            <div className={styles.fieldsContainer}>
              <label
                className={classnames(styles.label, {
                  [styles.errorLabel]: errors.address && touched.address,
                })}
              >
                Street
              </label>
              <Field
                className={classnames(styles.field, {
                  [styles.errorField]: errors.address && touched.address,
                })}
                name="address"
                type="text"
                placeholder="Enter street"
              />
            </div>
            <ErrorField errors={errors.address} touched={touched.address} />

            {/*<div className={styles.timeFieldsContainer}>*/}
            <div className={styles.fieldsContainer}>
              <label
                className={classnames(styles.label, {
                  [styles.errorLabel]: errors.timeOpen && touched.timeOpen,
                })}
              >
                Work Hours
              </label>
              <div className={styles.timeFieldsContainer}>
                <div className={styles.timeContainer}>
                  <small>Open:</small>
                  <Field
                    className={classnames(styles.field, styles.timeField, {
                      [styles.errorField]: errors.timeOpen && touched.timeOpen,
                    })}
                    name="timeOpen"
                    type="time"
                  />
                </div>
                <div className={styles.timeContainer}>
                  <small>Close:</small>
                  <Field
                    className={classnames(styles.field, styles.timeField, {
                      [styles.errorField]: errors.timeClose && touched.timeClose,
                    })}
                    name="timeClose"
                    type="time"
                  />
                </div>
              </div>
            </div>
            <ErrorField
              errors={errors.timeOpen || errors.timeClose}
              touched={touched.timeOpen || touched.timeClose}
            />

            {/*<div className={styles.fieldsContainer}>
                <label
                  className={classnames(styles.label, {
                    [styles.errorLabel]: errors.timeClose && touched.timeClose,
                  })}
                >
                  Work Hours
                </label>
                <Field
                  className={classnames(styles.field, {
                    [styles.errorField]: errors.timeClose && touched.timeClose,
                  })}
                  name='timeClose'
                  type='time'
                />
              </div>*/}
            {/*<ErrorField errors={errors.timeClose} touched={touched.timeClose} />*/}

            {/*</div>*/}

            {/*<div className={styles.fieldsContainer}>
              <label className={classnames(styles.label)}>Type of waste</label>

              <Field name="waste" as="select" className={classnames(styles.field)}>
                <option value="Paper">Paper</option>
                <option value="Plastic">Plastic</option>
                <option value="Glass">Glass</option>
                <option value="Metal">Metal</option>
                <option value="Electric Supply elements">Electric Supply elements</option>
              </Field>
            </div>
            <ErrorField />*/}

            {/*<div className={styles.fieldsContainer}>
              <label className={classnames(styles.label)}>Delivery condition option</label>

              <Field name="option" as="select" className={classnames(styles.field)}>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </Field>
            </div>
            <ErrorField />*/}

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
            <ErrorField errors={errors.password} touched={touched.password} />

            <div className={styles.fieldsContainer}>
              <label
                className={classnames(styles.label, {
                  [styles.errorLabel]: errors.confirmPassword && touched.confirmPassword,
                })}
              >
                Confirm Password
              </label>
              <Field
                className={classnames(styles.field, {
                  [styles.errorField]: errors.confirmPassword && touched.confirmPassword,
                })}
                name="confirmPassword"
                type={values.toggle ? 'text' : 'password'}
                placeholder="Enter password"
              />
            </div>
            <ErrorField errors={errors.confirmPassword} touched={touched.confirmPassword} />

            <div className={styles.toolsContainer}>
              <label>
                <Field type="checkbox" name="toggle" />
                Show password
              </label>
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

export default RegistrationForm;
