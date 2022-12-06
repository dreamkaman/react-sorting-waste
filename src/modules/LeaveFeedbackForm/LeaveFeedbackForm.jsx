import ReactDom from 'react-dom';
import styles from './LeaveFeedbackForm.module.scss';
import { Field, Form, Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaugh, faFaceSmile, faFaceMeh, faFaceFrown, faFaceAngry } from '@fortawesome/free-regular-svg-icons';
import classnames from 'classnames';
import * as Yup from 'yup';
const LeaveFeedbackForm = ({setIsOpenFeedback, service}) => {

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().required('Required').email("Invalid email. Example: 'example@mail.com'"),
    feedback: Yup.string().required('Required'),
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

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            feedback: '',
            rating: null,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
          <Form className={styles.wrap}>
              <div className={styles.text}>
                <h2>{service.name}</h2>
                <p>Leave feedback</p>
              </div>

              <div className={styles.ratingList}>
                <p className={styles.label}>Rate service:</p>
                <FontAwesomeIcon 
                  className={styles.rating} 
                  id={styles.one} 
                  icon={faFaceAngry} 
                  data-value='1' 
                  onClick={(e) => {
                    setFieldValue('rating', e.target.dataset.value);
                  }}/>
                <FontAwesomeIcon 
                  className={styles.rating} id={styles.two} 
                  icon={faFaceFrown} 
                  data-value='2' 
                  onClick={(e) => {
                    setFieldValue('rating', e.target.dataset.value);
                  }}/>
                <FontAwesomeIcon 
                  className={styles.rating} 
                  id={styles.three} 
                  icon={faFaceMeh} 
                  data-value='3' 
                  onClick={(e) => {
                    setFieldValue('rating', e.target.dataset.value);
                  }}/>
                <FontAwesomeIcon 
                  className={styles.rating} 
                  id={styles.four} 
                  icon={faFaceSmile} 
                  data-value='4' 
                  onClick={(e) => {
                    setFieldValue('rating', e.target.dataset.value);
                  }}/>
                <FontAwesomeIcon 
                  className={styles.rating} 
                  id={styles.five} 
                  icon={faFaceLaugh} 
                  data-value='5' 
                  onClick={(e) => {
                    setFieldValue('rating', e.target.dataset.value);
                  }}/>
              </div>

              <div className={styles.inputs}>
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
                </div>
                <Field name="feedback" component="textarea" className={styles.feedbackField} />
                <div className={styles.buttons}>

                  <button 
                    type="submit" 
                    className={styles.submit}>
                    Submit
                  </button>
                  <button 
                    type="submit"
                    onClick={() => setIsOpenFeedback(false)} 
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

export default LeaveFeedbackForm;
