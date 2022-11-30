import ReactDom from 'react-dom';
import styles from './MakeOrderForm.module.scss';
import { useForm } from 'react-hook-form';

const MakeOrderForm = ({setIsOpen, service}) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.wrap}>
          <div className={styles.text}>
            <h2>{service.name}</h2>
            <p>Make an order</p>
          </div>
          <div className={styles.inputs}>
            <button onClick={() => setIsOpen(false)} className={styles.cancel}> &#10006; </button>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Name" {...register("name",{required: true, minLength: 1})} className={styles.input}/>
              <input type="tel" placeholder="Mobile number" {...register("mobileNumber", {required: true, minLength: 6, maxLength: 12})} className={styles.input}/>
            </div>
            <input type="text" placeholder="Country"  {...register("country",{required: true, minLength: 1})} className={styles.input}/>
            <div className={styles.formGroup}>
              <input type="text" placeholder="City"  {...register("city",{required: true, minLength: 1})} className={styles.input}/>
              <input type="text" placeholder="Street"  {...register("street", {required: true, minLength: 1})} className={styles.input}/>
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} className={styles.input}/>
              <input type="text" placeholder="Quantity" {...register("quantity", {required: true, minLength: 1})} className={styles.input}/>
            </div>
            <input type="submit" value='Submit' className={styles.submit}/>
          </div>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
};

export default MakeOrderForm;
