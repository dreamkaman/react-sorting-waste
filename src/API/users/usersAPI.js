import axios from 'axios';
import * as paths from './paths';

export const postUser = (email, password) => axios.post(paths.authURL, { email, password });
