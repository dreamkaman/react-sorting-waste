import * as userAPI from '../../API/users/usersAPI';
import * as authActions from './authActions';

export const loginUserOperation = (email, password) => async (dispatch) => {
  dispatch(authActions.loginUserRequest());

  try {
    const user = await userAPI(email, password);
    console.log(user);
    dispatch(authActions.loginUserSuccess(user));
  } catch (error) {
    console.log(error);
    dispatch(authActions.loginUserError(error));
  }
};

export const signupServiceOperation =
  ({
    name,
    email,
    password,
    address,
    phoneNumber,
    workHours,
    photo,
    city,
    country,
    free,
    delivery,
  }) =>
  async (dispatch) => {
    dispatch(authActions.registerUserRequest()); //

    try {
      const service = await userAPI({
        name,
        email,
        password,
        address,
        phoneNumber,
        workHours,
        photo,
        city,
        country,
        free,
        delivery,
      });
      console.log(service);
      dispatch(authActions.loginUserSuccess(service));
    } catch (error) {
      console.log(error);
      dispatch(authActions.loginUserError(error));
    }
  };
