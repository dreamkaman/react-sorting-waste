import ReactDom from 'react-dom';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { getServiceByIdOperation } from 'redux/services/servicesOperations';
import { postWastePointRatingOperation } from 'redux/rating/ratingOperations';

import styles from './LeaveFeedbackForm.module.scss';
import { Field, Form, Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaugh, faFaceSmile, faFaceMeh, faFaceFrown, faFaceAngry } from '@fortawesome/free-regular-svg-icons';
import classnames from 'classnames';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  // name: Yup.string().required('Required'),
  // email: Yup.string().required('Required').email("Invalid email. Example: 'example@mail.com'"),
  feedback: Yup.string().required('Required'),
});

const LeaveFeedbackForm = ({setIsOpenFeedback, wastepoint}) => {
  
  // const ErrorField = (props) => {
  //   return (
  //     <div
  //       className={classnames(styles.errorMessage, {
  //         [styles.errorMessageActive]: props?.errors && props?.touched,
  //       })}
  //     >
  //       {props?.errors}
  //     </div>
  //   );
  // }
  const dispatch = useDispatch();

  const [ service, setService] = useState();

  const fetchApi = async () => {
    const requestService = await dispatch(getServiceByIdOperation(wastepoint.ecoServiceId));
    setService(requestService.payload.successObject);
  }

  const handleSubmit = (values) => {
    const requestObject = 
    {
      "id": 2,
      "rating": parseInt(values.rating),
      "comment": values.feedback,
      "ecoServiceDto": {
        "id": service.id,
        "name": service.name,
        "email": service.name,
        "address": service.address,
        "phoneNumber": service.phoneNumber,
        "workHours": service.workHours,
        "city": service.city,
        "country": service.country,
        "delivery": service.delivery,
        "free": service.free
      }
    }

    dispatch(postWastePointRatingOperation(requestObject))
  }

  useEffect(() => {
    fetchApi();
    document.body.style.overflow = 'hidden';
    return ()=> document.body.style.overflow = 'unset';
  }, []);


  return ReactDom.createPortal(
    <>
      <div className={styles.overlay}>
        <Formik
          initialValues={{
            feedback: '',
            rating: null,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
           handleSubmit(values);
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
          <Form className={styles.wrap}>
              <div className={styles.text}>
                <h2>{service?.name}</h2>
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
              <Field name="feedback" component="textarea" className={styles.feedbackField} />
              <div className={styles.buttons}>

                <button 
                    type="submit" 
                    className={styles.submit}>
                    Submit
                </button>

                <button 
                  type="delete"
                  onClick={() => setIsOpenFeedback(false)} 
                  className={styles.cancel}> 
                  Cancel 
                </button>

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