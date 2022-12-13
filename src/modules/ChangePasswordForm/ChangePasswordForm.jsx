import styles from './ChangePasswordForm.module.scss';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';

import { changePasswordServiceOperation } from 'redux/services/servicesOperations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import classnames from 'classnames';
import * as Yup from 'yup';

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

const validationSchema = Yup.object({
  oldPassword: Yup.string()
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
      "Invalid password. Example:'a0A#ccsxcvx'",
    ),
  newPassword: Yup.string()
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
      "Invalid password. Example:'a0A#ccsxcvx'",
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});

const ChangePasswordForm = () => {

  const dispatch = useDispatch();

  const service = useSelector((state) => state.logginedService.serviceInfo);

  const handleSubmit = async (values) => {

    if(!values.oldPassword || !values.newPassword || !values.confirmPassword) return;

    const requestObject = {
      "oldPassword": values.oldPassword,
      "newPassword": values.newPassword,
      "confirmPassword": values.confirmPassword,
    };

    dispatch(changePasswordServiceOperation(service.id, 
      {oldPassword: values.oldPassword, newPassword: values.newPassword, confirmPassword: values.confirmPassword}));

    console.log(requestObject);
  }

  return (
    <section className={styles.profileWrap}>
      <Formik
          initialValues={{
            oldPassword: '',
            newPassword: '',
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
                <div className={styles.title}>
                  <h1 className={styles.text}>Change password</h1>
                </div>
                
                <div className={styles.detailsList}>
                  <div className={styles.detail}>
                    <label className={styles.label}>Old password</label>
                    <Field 
                      className={classnames(styles.detailText, {
                        [styles.errorDetailText]: errors.confirmPassword && touched.confirmPassword,
                      })} 
                      type={values.toggle ? 'text' : 'password'}
                      name="oldPassword"></Field>
                    <FontAwesomeIcon icon={faPen} className={styles.icon}/>
                  </div>
                  <ErrorField errors={errors.oldPassword} touched={touched.oldPassword} />

                  <div className={styles.detail}>
                    <label className={styles.label}>New password</label>
                    <Field 
                      className={classnames(styles.detailText, {
                        [styles.errorDetailText]: errors.confirmPassword && touched.confirmPassword,
                      })}
                      type={values.toggle ? 'text' : 'password'}
                      name="newPassword"></Field>
                    <FontAwesomeIcon icon={faPen} className={styles.icon}/>
                  </div>
                  <ErrorField errors={errors.newPassword} touched={touched.newPassword} />

                  <div className={styles.detail}>
                    <label className={styles.label}>Confirm new password</label>
                    <Field 
                      className={classnames(styles.detailText, {
                        [styles.errorDetailText]: errors.confirmPassword && touched.confirmPassword,
                      })}
                      type={values.toggle ? 'text' : 'password'}
                      name="confirmPassword"></Field>
                    <FontAwesomeIcon icon={faPen} className={styles.icon}/>
                  </div>
                  <ErrorField errors={errors.confirmPassword} touched={touched.confirmPassword} />

                  <div className={styles.toolsContainer}>
                    <label>
                      <Field type="checkbox" name="toggle" />
                      Show password
                    </label>
                  </div>
              
                </div>
                <button type='submit' className={styles.submit}>Apply changes</button>
            </Form>
          )}
        </Formik>
    </section>
  );
};

export default ChangePasswordForm;
