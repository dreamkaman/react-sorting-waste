import MapsRegisterWaste from 'modules/MapsRegisterWaste';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { postWastePointOperation } from 'redux/wastePoints/wastePointsOperations';

import styles from './RegisterWasteForm.module.scss';
import { Field, Form, Formik } from 'formik';
import classnames from 'classnames';
import * as Yup from 'yup';

import { v4 as randomId } from 'uuid';

const validationSchema = Yup.object({
  description: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  street: Yup.string().required('Required'),
});

const typesOfWaste = ['Glass', 'Paper', 'Electronic', 'Metal', 'Plastic']

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

function RegisterWasteForm() {

  const service = useSelector((state) => state.logginedService.serviceInfo);
  const country = useSelector((state) => state.logginedService.serviceInfo.country);

  const dispatch = useDispatch();

  const [ longitude, setLongitude ] = useState(null);
  const [ latitude, setLatitude ] = useState(null);
  const [ checked, setChecked ] = useState([]);
  const [ delivery, setDelivery ] = useState(false);
  const [ free, setFree ] = useState(false);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
        newChecked.push(value)
    } else {
        newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked);
  }


  const handleSubmit = (values) => {
    const requestObject = {
      "types": [
        ...checked
      ],
      "description": values.description,
      "longitude": longitude,
      "latitude": latitude,
      "ecoServiceId": service.id,
      "wasteAddress": {
        "country": values.country,
        "city": values.city,
        "street": values.street
      },
      "free": free,
      "delivery": delivery
    }

    dispatch(postWastePointOperation(requestObject));

    console.log(requestObject);
  }

  return (
    <div>
      <div className={styles.imageBlock}>
        <p className={styles.title}>REGISTER A NEW WASTEPOINT</p>
      </div>
      <Formik
        initialValues={{
          description: '',
          country: '',
          city: '',
          street: '',
        }}
        validationSchema={validationSchema}

        onSubmit={(values) => {
          handleSubmit(values);
        }}

      >
        {({ values, errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.blockInputs}>
              <div className={styles.formWrap}>
                <div className={styles.fieldsContainer}>
                  <label
                    className={classnames(styles.label, {
                      [styles.errorLabel]: errors.country && touched.country,
                    })}
                  >
                    Country
                  </label>
                  <div>
                    <Field
                      className={classnames(styles.field, {
                        [styles.errorField]: errors.country && touched.country,
                      })}
                      name="country"
                      type="text"
                      placeholder="Enter country"
                    />
                    <ErrorField errors={errors.country} touched={touched.country}/>
                  </div>
                </div>
                
                <div className={styles.fieldsContainer}>
                  <label
                    className={classnames(styles.label, {
                      [styles.errorLabel]: errors.city && touched.city,
                    })}
                  >
                    City
                  </label>
                  <div>
                    <Field
                      className={classnames(styles.field, {
                        [styles.errorField]: errors.city && touched.city,
                      })}
                      name="city"
                      type="text"
                      placeholder="Enter city"
                    />
                    <ErrorField errors={errors.city} touched={touched.city}/>
                  </div>
                </div>

                <div className={styles.fieldsContainer}>
                  <label
                    className={classnames(styles.label, {
                      [styles.errorLabel]: errors.street && touched.street,
                    })}
                  >
                    Street
                  </label>
                  <div>
                    <Field
                      className={classnames(styles.field, {
                        [styles.errorField]: errors.street && touched.street,
                      })}
                      name="street"
                      type="text"
                      placeholder="Enter street"
                    />
                    <ErrorField errors={errors.street} touched={touched.street}/>
                  </div>
                </div>

                <div className={styles.fieldsContainer}>
                  <label
                    className={classnames(styles.label, {
                      [styles.errorLabel]: errors.description && touched.description,
                    })}
                  >
                    Describe your wastepoint
                  </label>
                  <div>
                    <Field
                      className={classnames(styles.fieldTextarea, {
                        [styles.errorFieldTextarea]: errors.description && touched.description,
                      })}
                      name="description"
                      type="text"
                      component="textarea"
                    />
                    <ErrorField errors={errors.description} touched={touched.description}/>
                  </div>
                </div>
              </div>
            
              <div className={styles.checkboxesWrap}>

                <label
                    className={styles.checkboxTitle}
                  >
                    Select type(-s) of waste
                </label>

                <div className={styles.checkboxes}>
                  {typesOfWaste.map((item, index)=> {
                      return(
                      <div className={styles.checkbox} key={index}>
                          <input type="checkbox"  
                              onChange={() => handleToggle(item)}
                              checked={checked.indexOf(item) === -1 ? false : true}/>
                          {item}
                      </div>)}
                      )
                    }    
                </div>

                <label
                    className={styles.checkboxTitle}
                  >
                    Options
                </label>

                <div className={styles.checkboxes}>
                  <div className={styles.checkbox}>
                      <input type="checkbox"  
                          onChange={() => setDelivery(!delivery)} />
                          Delivery
                  </div>
                  <div className={styles.checkbox}>
                      <input type="checkbox"  
                          onChange={() => setFree(!free)}/>
                          Free
                  </div>
                </div>

              </div>
             </div>
            <div>

              <div className={styles.titleMap}><p className={styles.title}>Choose your location</p></div>
                  
              <MapsRegisterWaste setLongitude={ setLongitude } setLatitude={ setLatitude } country={ country }/>

              <div className={styles.buttons}>
                <button type='submit'>Add Wastepoint</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterWasteForm;