import axios from 'axios';
import * as paths from './paths';

// axios.defaults.baseURL = 'https://go-eco.herokuapp.com'; //for production

axios.defaults.baseURL = '/'; //for development

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export const loginService = (email, password) =>
  axios.post(paths.authURL, { email, password }, { headers });

export const signupService = (ecoServiceObject) =>
  axios.post(paths.ecoServiceURL, ecoServiceObject, { headers });

export const changePasswordService = (params) => {
  console.log(params);
  const { id, passwords } = params;

  const path = paths.ecoServiceURL + `/${id}`;
  return axios.patch(path, passwords, { headers });
};

export const changeServiceInfo = (newEcoServiceObject) => {
  const path = paths.ecoServiceURL + `/${newEcoServiceObject.id}`;
  return axios.put(path, newEcoServiceObject, { headers });
};

export const getServices = () => axios.get(paths.ecoServiceURL, { headers });

export const getServiceById = (id) => {
  const path = paths.ecoServiceURL + `/${id}`;
  return axios.get(path, { headers });
};

export const deleteService = (ecoServiceId) => {
  const path = paths.ecoServiceURL + '/' + ecoServiceId;
  return axios.delete(path, { headers });
};

export const getFilteredWastePoints = (filter) => {
  const { types, country, city } = filter;

  let query = city ? `city=${city}` : '';

  query = country ? `country=${country}&${query}` : query;

  query = types
    ? types
        .map((item, index, array) =>
          index !== array.length - 1 ? `types=${item}&` : `types=${item}`,
        )
        .join('')
    : `${query}`;

  const path = query ? paths.wastePointsURL + `?${query}` : paths.wastePointsURL;

  return axios.get(path, { headers });
};

export const postWastePoint = (wastePointObject) =>
  axios.post(paths.wastePointsURL, wastePointObject, { headers });

export const getWastePointById = (wastePointId) => {
  const path = paths.wastePointsURL + '/' + wastePointId;
  return axios.get(path, { headers });
};

export const getWastPointsByEcoServiceId = (ecoServiceId) => {
  const path = paths.wastePointsURL + '/ecoServiceId/' + ecoServiceId;
  return axios.get(path, { headers });
};

export const postWastePointRating = (feedback) => {
  //feedback is object { rating, comment, wasteId, ecoServiceId }
  return axios.post(paths.ratingsURL, feedback, { headers });
};

export const getWastePointRating = (wasteId) => {
  const path = paths.ratingsURL + `/waste/${wasteId}`;
  return axios.get(path, { headers });
};

export const getAllWastePointRatings = () => {
  const path = paths.ratingsURL + '/waste';
  return axios.get(path, { headers });
};

export const postOrder = (order) => {
  return axios.post(paths.ordersURL, order, { headers });
};

export const getOrders = () => {
  return axios.get(paths.ordersURL, { headers });
};

export const patchOrder = ({ orderId, newStatus }) => {
  const path = paths.ordersURL + `/${orderId}/${newStatus}`;
  return axios.patch(path, { headers });
};

export const getOrdersByEcoserviceId = (ecoserviceId) => {
  const path = paths.ordersURL + `/${ecoserviceId}`;
  return axios.get(path, { headers });
};
