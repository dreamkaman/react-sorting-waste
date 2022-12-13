import ReactDom from 'react-dom';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { getServiceByIdOperation } from 'redux/services/servicesOperations';
import { postWastePointRatingOperation } from 'redux/rating/ratingOperations';

import styles from './AddFeedbackForm.module.scss';
import './AddFeedbackForm.css';

import { Field, Form, Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceLaugh,
  faFaceSmile,
  faFaceMeh,
  faFaceFrown,
  faFaceAngry,
  faFaceDizzy,
} from '@fortawesome/free-regular-svg-icons';
import classnames from 'classnames';
import * as Yup from 'yup';

const validationSchema = Yup.object({
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
};

const AddFeedbackForm = ({ setIsOpenFeedback, wastepoint }) => {
  const dispatch = useDispatch();

  const [service, setService] = useState();
  const [selectRate, setSelectRate] = useState(false);
  const [rate, setRate] = useState();
  const [selected, setSelected] = useState();

  const fetchApi = async () => {
    const requestService = await dispatch(getServiceByIdOperation(wastepoint.ecoServiceId));
    setService(requestService.payload.successObject);
  };

  const handleSubmit = (values) => {
    setRate(parseInt(values.rating));
    if (!values.rating || parseInt(values.rating) === 0) {
      setSelectRate(true);
      return;
    }

    const requestObject = {
      rating: parseInt(values.rating),
      comment: values.feedback,
      ecoServiceId: service.id,
      wasteId: wastepoint.id,
    };

    dispatch(postWastePointRatingOperation(requestObject));
  };

  const handleClick = (rate) => {
    setSelected(rate);
  };

  useEffect(() => {
    fetchApi();
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  useEffect(() => {
    if (rate) {
      setSelectRate(true);
    }
  }, [setSelectRate]);

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
                  className={selected === 'rate1' ? 'selectedIcon' : 'notSelectedIcon'}
                  id={styles.one}
                  icon={faFaceAngry}
                  data-value="1"
                  onClick={(e) => {
                    setFieldValue('rating', e.target.dataset.value);
                    setSelectRate(false);
                    handleClick('rate1');
                  }}
                />
                <FontAwesomeIcon
                    className={selected === 'rate2' ? 'selectedIcon' : 'notSelectedIcon'}
                    id={styles.two}
                    icon={faFaceFrown}
                    data-value="2"
                    onClick={(e) => {
                      setFieldValue('rating', e.target.dataset.value);
                      setSelectRate(false);
                      handleClick('rate2');
                    }}
                  />
                <FontAwesomeIcon
                    className={selected === 'rate3' ? 'selectedIcon' : 'notSelectedIcon'}
                    id={styles.three}
                    icon={faFaceMeh}
                    data-value="3"
                    onClick={(e) => {
                      setFieldValue('rating', e.target.dataset.value);
                      setSelectRate(false);
                      handleClick('rate3');
                    }}
                  />
                <FontAwesomeIcon
                    className={selected === 'rate4' ? 'selectedIcon' : 'notSelectedIcon'}
                    id={styles.four}
                    icon={faFaceSmile}
                    data-value="4"
                    onClick={(e) => {
                      setFieldValue('rating', e.target.dataset.value);
                      setSelectRate(false);
                      handleClick('rate4');
                    }}
                  />
                <FontAwesomeIcon
                    className={selected === 'rate5' ? 'selectedIcon' : 'notSelectedIcon'}
                    id={styles.five}
                    icon={faFaceLaugh}
                    data-value="5"
                    onClick={(e) => {
                      setFieldValue('rating', e.target.dataset.value);
                      setSelectRate(false);
                      handleClick('rate5');
                    }}
                  />
              </div>
              {selectRate && <p className={styles.typesError}>Rating required</p>}
              <Field
                name="feedback"
                component="textarea"
                className={classnames(styles.feedbackField, {
                  [styles.errorFeedbackField]: errors.name && touched.name,
                })}
              />
              <ErrorField errors={errors.feedback} touched={touched.feedback} />
              <div className={styles.buttons}>
                <button type="submit" className={styles.submit}>
                  Submit
                </button>

                <button
                  type="delete"
                  onClick={() => setIsOpenFeedback(false)}
                  className={styles.cancel}
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>,
    document.getElementById('portal'),
  );
};

export default AddFeedbackForm;
