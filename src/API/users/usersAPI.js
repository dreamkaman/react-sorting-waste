import axios from 'axios';
import * as paths from './paths';

export const loginUser = (email, password) => axios.post(paths.authURL, { email, password });

export const signupUser = ({
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
  axios({
    method: 'post',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    url: paths.ecoServiceURL,
    data: {
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
    },
  });
