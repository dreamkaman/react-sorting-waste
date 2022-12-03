import ReactDom from 'react-dom';
import styles from './MakeOrderForm.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import classnames from 'classnames';

const MakeOrderForm = ({setIsOpen, service}) => {

  const handleSubmit = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1500)
  }

  const validateEmail = (value) => {
    if (!value) {
      return 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return "Invalid email address. Example: 'example@mail.com'";
    }
  };  

  const validateNumber = (value) => {
    if (!value) {
      return 'Required';
    } else if (!/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/i.test(value)) {
      return "Invalid phone number";
    }
  };  

  const validateText = (value) => {
    if (!value) {
      return 'Required';
    } else if (!/^.{1,}$/i.test(value)) {
      return "Invalid input value";
    }
  }; 

  const validateStreet = (value) => {
    if (!value) {
      return 'Required';
    } else if (/^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/.test(value)) {
      return "Invalid input value";
    }
  };  

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay}>
          <Formik
          initialValues={{
            name: '',
            mobileNumber: '',
            email: '',
            city: '',
            street: '',
            country: '',
            quantity: '',
          }}
          onSubmit={(values) => {
            console.log('submit', values);
          }}
        >
          {({ values, errors, touched }) => (
          <Form className={styles.wrap}>
            <div className={styles.text}>
              <h2>{service.name}</h2>
              <p>Make an order</p>
            </div>
            <div className={styles.inputs}>

            <div className={styles.types}>
                <label 
                  className={styles.checkboxLabel}>
                  Select type(-s) of waste
                </label>
                <div className={styles.checkboxes}>
                  {service.type.map((item, index) => {
                    return (
                      <p className={styles.checkbox} key={index}>
                        <Field type="checkbox" name="checked" value={item} />
                        {item}
                      </p>
                    )
                  })}
                </div>
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
                      validate={validateText}
                    />
                      <div
                        className={classnames(styles.errorMessage, {
                          [styles.errorMessageActive]: errors.name && touched.name,
                        })}>
                        {errors.name}
                      </div>
                  </div>
                </div>

                <div className={styles.inputContainer}>
                  <label 
                    className={classnames(styles.label, {
                      [styles.errorLabel]: errors.mobileNumber && touched.mobileNumber,
                    })}>
                    Mobile number
                  </label>
                  <div className={styles.inputWrap}>
                    <Field
                        className={classnames(styles.field, {
                          [styles.errorField]: errors.mobileNumber && touched.mobileNumber,
                        })}
                        name="mobileNumber"
                        type="text"
                        placeholder="Enter number"
                        validate={validateNumber}
                      />
                      <div
                        className={classnames(styles.errorMessage, {
                          [styles.errorMessageActive]: errors.mobileNumber && touched.mobileNumber,
                        })}>
                        {errors.mobileNumber}
                      </div>
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
                        validate={validateEmail}
                      />
                      <div
                          className={classnames(styles.errorMessage, {
                            [styles.errorMessageActive]: errors.email && touched.email,
                          })}>
                        {errors.email}
                      </div>
                  </div>
                </div>

              <div className={styles.formGroup}>

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
                        validate={validateText}
                      />
                      <div
                          className={classnames(styles.errorMessage, {
                            [styles.errorMessageActive]: errors.city && touched.city,
                          })}>
                        {errors.city}
                      </div>
                  </div>
                </div>

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
                        validate={validateStreet}
                      />
                      <div
                          className={classnames(styles.errorMessage, {
                            [styles.errorMessageActive]: errors.street && touched.street,
                          })}>
                        {errors.street}
                      </div>  
                  </div>
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
                        validate={validateText}
                      />
                      <div
                          className={classnames(styles.errorMessage, {
                            [styles.errorMessageActive]: errors.country && touched.country,
                          })}>
                        {errors.country}
                      </div>
                  </div>
                </div>

                <div className={styles.inputContainer}>
                  <label 
                    className={classnames(styles.label, {
                      [styles.errorLabel]: errors.quantity && touched.quantity,
                    })}>
                    Quantity
                  </label>
                  <div className={styles.inputWrap}>
                    <Field
                        className={classnames(styles.field, {
                          [styles.errorField]: errors.quantity && touched.quantity,
                        })}
                        name="quantity"
                        type="text"
                        placeholder="Enter quantity"
                        validate={validateText}
                      />
                      <div
                          className={classnames(styles.errorMessage, {
                            [styles.errorMessageActive]: errors.quantity && touched.quantity,
                          })}>
                        {errors.quantity}
                      </div>
                  </div>
                </div>

              </div>

              <div className={styles.buttons}>
                <input 
                  type="submit" 
                  value='Submit' 
                  className={styles.submit}
                  onClick={handleSubmit}/>
                <button 
                  onClick={() => setIsOpen(false)} 
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
