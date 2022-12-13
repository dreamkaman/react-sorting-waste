import ReactDom from 'react-dom';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { getServiceByIdOperation } from 'redux/services/servicesOperations';
import { postOrderOperation } from 'redux/orders/orderOperations';

import styles from './MakeOrderForm.module.scss';
import { Field, Form, Formik } from 'formik';
import classnames from 'classnames';
import * as Yup from 'yup';


  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required').email("Invalid email. Example: 'example@mail.com'"),
    phone: Yup.string()
      .required('Required')
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
        'Phone number is not valid',
      ),
    city: Yup.string().required('Required'),
    street: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
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

const MakeOrderForm = ({setIsOpenOrder, wastepoint, toast}) => {

  const dispatch = useDispatch();

  const [ service, setService] = useState();
  const [ checked, setChecked ] = useState([]);
  const [ selectType, setSelectType ] = useState(false)

  const fetchApi = async () => {
    const requestService = await dispatch(getServiceByIdOperation(wastepoint.ecoServiceId));
    setService(requestService.payload.successObject);
  }

  useEffect(() => {
    fetchApi();

    document.body.style.overflow = 'hidden';
    return ()=> document.body.style.overflow = 'unset';

  }, []);

  useEffect(() => {
    if(checked.length) {
      setSelectType(false);
    }
  }, [checked]);

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
    if(!checked.length) {
      setSelectType(true);
      return;
    }
    setSelectType(false);

    const requestObject = {
      "wasteId": wastepoint.id,
      "customerName": values.name,
      "customerEmail": values.email,
      "customerPhone": values.phone,
      "description": values.description,
      "status": "OPEN",
      "orderTime": new Date().toJSON().toString(),
    }
    
    dispatch(postOrderOperation(requestObject));

    toast.success('Your order has been created', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setIsOpenOrder(false);
  }

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay}>
          <Formik
          initialValues={{
            name: '',
            phone: '',
            email: '',
            city: '',
            street: '',
            country: '',
            description: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ values, errors, touched }) => (
          <Form className={styles.wrap}>
            <div className={styles.text}>
              <h2>{service?.name}</h2>
              <p>Make an order</p>
            </div>
            <div className={styles.inputs}>

            <div className={styles.types}>
                <label 
                  className={styles.checkboxLabel}>
                  Select type(-s) of waste
                </label>
                <div className={styles.checkboxes}>
                  {wastepoint.types.map((item, index) => {
                    return (
                      <label className={styles.checkbox} key={index}>
                          <input type="checkbox"  
                              onChange={() => handleToggle(item)}
                              checked={checked.indexOf(item) === -1 ? false : true}/>
                          {item}
                      </label>
                    )
                  })}
                </div>
                {selectType && <p className={styles.typesError}>Required</p>}
              </div>

              <div className={styles.formGroup}>

                <div className={styles.inputContainer}>
                  <label 
                    className={classnames(styles.label, {
                      [styles.errorLabel]: errors.name && touched.name,
                    })}>
                    Name
                  </label>
                  <div className={styles.inputWrap}>
                    <Field
                      className={classnames(styles.field, {
                        [styles.errorField]: errors.name && touched.name,
                      })}
                      name="name"
                      type="text"
                      placeholder="Enter name"
                    />
                    <ErrorField errors={errors.name} touched={touched.name}/>
                  </div>
                </div>

                <div className={styles.inputContainer}>
                  <label 
                    className={classnames(styles.label, {
                      [styles.errorLabel]: errors.phone && touched.phone,
                    })}>
                    Mobile number
                  </label>
                  <div className={styles.inputWrap}>
                    <Field
                        className={classnames(styles.field, {
                          [styles.errorField]: errors.phone && touched.phone,
                        })}
                        name="phone"
                        type="text"
                        placeholder="Enter number"
                      />
                      <ErrorField errors={errors.phone} touched={touched.phone}/>
                  </div>
                </div>

              </div>

                <div className={styles.inputContainerLong}>
                  <label 
                    className={classnames(styles.label, {
                      [styles.errorLabel]: errors.email && touched.email,
                    })}>
                    Email
                  </label>
                  <div className={styles.inputWrap}>
                    <Field
                        className={classnames(styles.field, {
                          [styles.errorField]: errors.email && touched.email,
                        })}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                      />
                      <ErrorField errors={errors.email} touched={touched.email}/>
                  </div>
                </div>

              <div className={styles.formGroup}>

                <div className={styles.inputContainer}>
                    <label 
                      className={classnames(styles.label, {
                        [styles.errorLabel]: errors.country && touched.country,
                      })}>
                      Country
                    </label>
                    <div className={styles.inputWrap}>
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

                  <div className={styles.inputContainer}>
                    <label 
                      className={classnames(styles.label, {
                        [styles.errorLabel]: errors.city && touched.city,
                      })}>
                      City
                    </label>
                    <div className={styles.inputWrap}>
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

              </div>
              <div className={styles.formGroup}>

                <div className={styles.inputContainer}>
                  <label 
                    className={classnames(styles.label, {
                      [styles.errorLabel]: errors.street && touched.street,
                    })}>
                    Street
                  </label>
                  <div className={styles.inputWrap}>
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

                <div className={styles.inputContainer}>
                  <label 
                    className={classnames(styles.label, {
                      [styles.errorLabel]: errors.description && touched.description,
                    })}>
                    Description
                  </label>
                  <div className={styles.inputWrap}>
                    <Field
                        className={classnames(styles.field, {
                          [styles.errorField]: errors.description && touched.description,
                        })}
                        name="description"
                        type="text"
                        placeholder="Enter description"
                      />
                      <ErrorField errors={errors.country} touched={touched.country}/>
                  </div>
                </div>

              </div>

              <div className={styles.buttons}>

                <button 
                  type="submit" 
                  className={styles.submit}>
                  Submit
                </button>
                <button 
                  type="submit"
                  onClick={() => setIsOpenOrder(false)} 
                  className={styles.cancel}> 
                  Cancel 
                </button>

              </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>,
    document.getElementById('portal')
  )
};

export default MakeOrderForm;
