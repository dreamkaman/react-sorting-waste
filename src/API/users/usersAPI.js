import axios from 'axios';
import * as paths from './paths';

export const loginUser = (email, password) => axios.post(paths.authURL, { email, password });

export const signupUser = (service) => axios.post(paths.ecoServiceURL, service);
