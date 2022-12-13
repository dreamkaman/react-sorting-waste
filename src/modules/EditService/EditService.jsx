import styles from './EditService.module.scss';
import serviceImage from '../../images/serviceImage.png';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';

import { changeServiceInfoOperation } from 'redux/services/servicesOperations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const EditService = () => {

  const dispatch = useDispatch();

  const service = useSelector((state) => state.logginedService.serviceInfo);

  const handleSubmit = async (values) => {
    const requestObject = {
      "id": service.id,
      "name": values.name,
      "email": values.email,
      "address": values.address,
      "phoneNumber": values.phoneNumber,
      "workHours": values.timeOpen + '-' + values.timeClose,
      "city": values.city,
      "country": values.country
    };

    console.log(requestObject);

    // dispatch(changeServiceInfoOperation(requestObject));
  }

  return (
    <section className={styles.profileWrap}>
      <Formik
          initialValues={{
            name: service.name,
            phoneNumber: service.phoneNumber,
            timeOpen: service.workHours.substr(0, service.workHours.indexOf('+')),
            timeClose: service.workHours.substr(service.workHours.indexOf('+') + 1),
            email: service.email,
            country: service.country,
            city: service.city,
            address: service.address,
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
           {({ values, errors, touched }) => (
            <Form>
              <div className={styles.title}>
                  <h1 className={styles.text}>My Profile</h1>
                  <h2>Photo</h2>
                  <img className={styles.photo} src={serviceImage} />  
                </div>
                <div className={styles.detailsList}>
                  <div className={styles.detail}>
                    <label className={styles.label}>Company name</label>
                    <Field className={styles.detailText} name="name"></Field>
                    <FontAwesomeIcon icon={faPen} className={styles.icon}/>
                  </div>
                  <div className={styles.detail}>
                    <label className={styles.label}>Phone</label>
                    <Field className={styles.detailText} name="phoneNumber"></Field>
                    <FontAwesomeIcon icon={faPen} className={styles.icon}/>
                  </div>
                  <div className={styles.detail}>
                    <label className={styles.label}>Country</label>
                    <Field className={styles.detailText} name="country"></Field>
                    <FontAwesomeIcon icon={faPen} className={styles.icon}/>
                  </div>
                  <div className={styles.detail}>
                    <label className={styles.label}>City</label>
                    <Field className={styles.detailText} name="city"></Field>
                    <FontAwesomeIcon icon={faPen} className={styles.icon}/>
                  </div>
                  <div className={styles.detail}>
                    <label className={styles.label}>Street</label>
                    <Field className={styles.detailText} name="address"></Field>
                    <FontAwesomeIcon icon={faPen} className={styles.icon}/>
                  </div>
                  <div className={styles.detail}>
                    <label className={styles.label}>Gmail</label>
                    <Field className={styles.detailText} name="email"></Field>
                    <FontAwesomeIcon icon={faPen} className={styles.icon}/>
                  </div>
                  <div className={styles.detail}>
                  <label className={styles.label}>Work hours</label>
                    <div className={styles.timeFieldsContainer}>
                      <div className={styles.timeContainer}>
                          <small>Open:</small>
                          <Field
                            name="timeOpen"
                            type="time"
                          />
                        </div>
                        <div className={styles.timeContainer}>
                          <small>Close:</small>
                          <Field
                            name="timeClose"
                            type="time"
                          />
                        </div>
                    </div>
                  </div>
                </div>
                <button type='submit' className={styles.submit}>Apply changes</button>
            </Form>
          )}
        </Formik>
    </section>
  );
};

export default EditService;
