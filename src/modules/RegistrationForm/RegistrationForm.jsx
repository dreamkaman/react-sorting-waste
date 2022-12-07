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
}

const RegistrationForm = ({onClose}) => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.headerContainer} style={{ backgroundImage: `url(${image})` }}>
        <FontAwesomeIcon onClick={onClose} className={styles.closeIcon} icon={faXmark} />
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

        // TODO submit button ====================
        onSubmit={(values) => {
          console.log('submit', values);
          onClose();
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
            <ErrorField errors={errors.company} touched={touched.company}/>

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
            <ErrorField errors={errors.email} touched={touched.email}/>

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
            <ErrorField errors={errors.phone} touched={touched.phone}/>


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
            <ErrorField errors={errors.country} touched={touched.country}/>

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
            <ErrorField errors={errors.city} touched={touched.city}/>


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
            <ErrorField errors={errors.street} touched={touched.street}/>

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
            <ErrorField />

            <div className={styles.fieldsContainer}>
              <label className={classnames(styles.label)}>Delivery condition option</label>

              <Field name="option" as="select" className={classnames(styles.field)}>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </Field>
            </div>
            <ErrorField />

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
            <ErrorField errors={errors.password} touched={touched.password}/>

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
            <ErrorField errors={errors.confirmPassword} touched={touched.confirmPassword}/>

            <div className={styles.toolsContainer}>
              <label>
                <Field type="checkbox" name="toggle" />
                Show password
              </label>
            </div>

            <div className={styles.groupButtons}>
              <button type='submit'>Submit</button>
              <button type='button' onClick={onClose}>Close</button>
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
