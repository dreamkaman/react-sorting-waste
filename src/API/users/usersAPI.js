import axios from 'axios';
const BASE_URL = 'http://localhost:8080/';

const authURL = BASE_URL + 'auth';

export const postUser = (email, password) => axios.post(authURL, { email, password });
