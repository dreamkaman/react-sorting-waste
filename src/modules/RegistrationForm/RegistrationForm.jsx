import styles from './RegistrationForm.module.scss';
import image from '../../images/backgroundForm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Field, Form, Formik } from 'formik';
import classnames from 'classnames';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  company: Yup.string().required('Required'),
  email: Yup.string().required('Required').email("Invalid email. Example: 'example@mail.com'"),
  phone: Yup.string()
    .required('Required')
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
      'Phone number is not valid',
    ),
  country: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  street: Yup.string().required('Required'),
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

 const ErrorField = (errors, touched) => {
  return (
    <div
      className={classnames(styles.errorMessage, {
        [styles.errorMessageActive]: errors && touched,
      })}
    >
      {errors}
    </div>
  );
}

const RegistrationForm = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.headerContainer} style={{ backgroundImage: `url(${image})` }}>
        <FontAwesomeIcon className={styles.closeIcon} icon={faXmark} />
        <span>Sign Up</span>
      </div>

      <Formik
        initialValues={{
          company: '',
          email: '',
          phone: '',
          country: '',
          city: '',
          street: '',
          waste: 'Paper',
          option: 'Free',
          password: '',
          confirmPassword: '',
          toggle: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('submit', values);
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div className={styles.fieldsContainer}>
              <label
                className={classnames(styles.label, {
                  [styles.errorLabel]: errors.company && touched.company,
                })}
              >
                Company name
              </label>
              <Field
                className={classnames(styles.field, {
                  [styles.errorField]: errors.company && touched.company,
                })}
                name="company"
                type="text"
                placeholder="Enter company name"
              />
            </div>


            {/*TODO*/}
            {/*<div
              className={classnames(styles.errorMessage, {
                [styles.errorMessageActive]: errors.company && touched.company,
              })}
            >
              {errors.company}
            </div>*/}
            {ErrorField(errors.company, touched.company)}

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
                  [styles.errorLabel]: errors.phone && touched.phone,
                })}
              >
                Phone
              </label>
              <Field
                className={classnames(styles.field, {
                  [styles.errorField]: errors.phone && touched.phone,
                })}
                name="phone"
                type="text"
                placeholder="Enter phone"
              />
            </div>

            <div
              className={classnames(styles.errorMessage, {
                [styles.errorMessageActive]: errors.phone && touched.phone,
              })}
            >
              {errors.phone}
            </div>

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
                type="country"
                placeholder="Enter country"
              />
            </div>

            <div
              className={classnames(styles.errorMessage, {
                [styles.errorMessageActive]: errors.country && touched.country,
              })}
            >
              {errors.country}
            </div>

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
                type="city"
                placeholder="Enter city"
              />
            </div>

            <div
              className={classnames(styles.errorMessage, {
                [styles.errorMessageActive]: errors.city && touched.city,
              })}
            >
              {errors.city}
            </div>

            <div className={styles.fieldsContainer}>
              <label
                className={classnames(styles.label, {
                  [styles.errorLabel]: errors.street && touched.street,
                })}
              >
                Street
              </label>
              <Field
                className={classnames(styles.field, {
                  [styles.errorField]: errors.street && touched.street,
                })}
                name="street"
                type="street"
                placeholder="Enter street"
              />
            </div>

            <div
              className={classnames(styles.errorMessage, {
                [styles.errorMessageActive]: errors.street && touched.street,
              })}
            >
              {errors.street}
            </div>

            <div className={styles.fieldsContainer}>
              <label className={classnames(styles.label)}>Type of waste</label>

              <Field name="waste" as="select" className={classnames(styles.field)}>
                <option value="Paper">Paper</option>
                <option value="Plastic">Plastic</option>
                <option value="Glass">Glass</option>
                <option value="Metal">Metal</option>
                <option value="Electric Supply elements">Electric Supply elements</option>
              </Field>
            </div>
            <div className={classnames(styles.errorMessage)}></div>

            <div className={styles.fieldsContainer}>
              <label className={classnames(styles.label)}>Delivery condition option</label>

              <Field name="option" as="select" className={classnames(styles.field)}>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
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
              />
            </div>

            <div
              className={classnames(styles.errorMessage, {
                [styles.errorMessageActive]: errors.password && touched.password,
              })}
            >
              {errors.password}
            </div>

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

            <div
              className={classnames(styles.errorMessage, {
                [styles.errorMessageActive]: errors.confirmPassword && touched.confirmPassword,
              })}
            >
              {errors.confirmPassword}
            </div>

            <div className={styles.toolsContainer}>
              <label>
                <Field type="checkbox" name="toggle" />
                Show password
              </label>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
