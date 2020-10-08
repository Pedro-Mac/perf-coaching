import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}/authentication`,
  withCredentials: true
});

// export const signUp = body => {
//   return api.post('/sign-up', body).then(res => {
//     return res.data;
//   });
// };

export const signUp = body => api.post(`/sign-up`, body).then(res => res.data);

export const signIn = body =>
  api.post('/sign-in', body).then(response => response.data);

export const signOut = () =>
  api.post('/sign-out').then(response => response.data);

export const loadMe = () => api.get('/me').then(response => response.data);

// export const signUp = body =>
//   axios
//     .post(`${process.env.REACT_APP_API}/authentication/sign-up`, body)
//     .then(res => res.data);

// export const signIn = body =>
//   axios
//     .post(`${process.env.REACT_APP_API}/authentication/sign-in`, body)
//     .then(res => res.data);

// export const signOut = () =>
//   axios
//     .post(`${process.env.REACT_APP_API}/authentication/sign-out`)
//     .then(res => res.data);

// export const loadMe = () =>
//   axios
//     .get(`${process.env.REACT_APP_API}/authentication/me`)
//     .then(res => res.data);
