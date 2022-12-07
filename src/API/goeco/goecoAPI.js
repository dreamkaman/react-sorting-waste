import axios from 'axios';
import * as paths from './paths';

export const loginService = (email, password) =>
  axios.post(
    paths.authURL,
    { email, password },
    {
      headers: {
        'content-type': 'text/json',
      },
    },
  );

export const signupService = (ecoServiceObject) =>
  axios.post(paths.ecoServiceURL, ecoServiceObject);

export const getServices = () => axios.get(paths.ecoServiceURL);

export const deleteService = (ecoServiceId) => {
  const path = paths.ecoServiceURL + '/' + ecoServiceId;
  return axios.delete(path);
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

  return axios.get(path);
};

export const postWastePoint = (wastePointObject) =>
  axios.post(paths.wastePointsURL, wastePointObject);

export const getWastePointById = (wastePointId) => {
  const path = paths.wastePointsURL + '/' + wastePointId;
  return axios.get(path);
};

export const getWastPointsByEcoServiceId = (ecoServiceId) => {
  const path = paths.wastePointsURL + '/ecoserviceId/' + ecoServiceId;
  return axios.get(path);
};

export const postWastePointRating = (feedback) => {
  //feedback is object { rating, comment, wasteId }
  return axios.post(paths.ratingsURL, feedback);
};

export const getWastePointRating = (wasteId) => {
  const path = paths.ratingsURL + `/waste/${wasteId}`;
  return axios.get(path);
};

export const postOrder = (order) => {
  return axios.post(paths.ordersURL, order);
};

export const patchOrder = (orderId, newStatus) => {
  const path = paths.ordersURL + `/${orderId}/${newStatus}`;
  return axios.patch(path);
};

export const getOrdersByEcoserviceId = (ecoserviceId) => {
  const path = paths.ordersURL + `/${ecoserviceId}`;
  return axios.get(path);
};
