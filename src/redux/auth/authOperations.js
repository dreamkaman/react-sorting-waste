import * as userAPI from '../../API/users/usersAPI';
import * as authActions from './authActions';

export const loginUserOperation = () => async (dispatch) => {
  dispatch(authActions.loginUserRequest());

  try {
    const user = await userAPI('test@gmail.com', '123456');
    dispatch(authActions.loginUserSuccess(user));
  } catch (error) {
    dispatch(authActions.loginUserError(error));
  }
};
