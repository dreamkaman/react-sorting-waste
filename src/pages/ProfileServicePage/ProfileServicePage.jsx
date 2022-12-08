import { useSelector, useDispatch } from 'react-redux';
import { changeServiceInfoOperation } from 'redux/services/servicesOperations';
import { isLoggined } from 'redux/auth/authSelectors';
const ProfileServicePage = () => {
  const dispatch = useDispatch();

  const testValues = {
    id: useSelector(isLoggined), //not change
    name: 'string',
    email: 'string',
    address: 'string',
    phoneNumber: 'string',
    workHours: 'string',
    city: 'string',
    country: 'string',
  };

  const onChangeServiceInfo = (newEcoserviceObject) => {
    dispatch(changeServiceInfoOperation(newEcoserviceObject));
  };

  return (
    <main>
      <h1>Here you can change data from your profile</h1>
      <p>Hello ProfileServicePage</p>
      <button onSubmit={() => onChangeServiceInfo(testValues)}></button>
    </main>
  );
};

export default ProfileServicePage;
