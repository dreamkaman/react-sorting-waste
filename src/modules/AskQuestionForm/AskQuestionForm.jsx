import ReactDom from 'react-dom';
import { useEffect } from 'react';
import styles from './AskQuestionForm.module.scss';
import { Field, Form, Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import classnames from 'classnames';
import * as Yup from 'yup';

const AskQuestionForm = ({setIsOpenQuestion, toast}) => {

  const validationSchema = Yup.object({
    email: Yup.string().required('Required').email("Invalid email. Example: 'example@mail.com'"),
    question: Yup.string().required('Required'),
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

  const handleSubmit = () => {
      toast.success('Thank you for a question!', {
      autoClose: 2600,
    });

    setIsOpenQuestion(false);
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return ()=> document.body.style.overflow = 'unset';
  }, []);


  return ReactDom.createPortal(
    <>
      <div className={styles.overlay}>
        <Formik
          initialValues={{
            email: '',
            question: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
          <Form className={styles.wrap}>           
              <div className={styles.inputs}>

                  <div className={styles.title}>
                    <FontAwesomeIcon icon={faCircleQuestion} className={styles.icon}/>
                    Ask A Question
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

                <Field name="question" component="textarea" className={styles.questionField} />
                <div className={styles.buttons}>

                  <button 
                    type="submit" 
                    className={styles.submit}>
                    Submit
                  </button>
                  <button 
                    type="submit"
                    onClick={() => setIsOpenQuestion(false)} 
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
export default AskQuestionForm;
