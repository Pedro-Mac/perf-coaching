import axios from 'axios';

export const signUp = body =>
  axios
    .post(`${process.env.REACT_APP_API}/authentication/sign-up`, body)
    .then(res => res.data);

export const signIn = body =>
  axios
    .post(`${process.env.REACT_APP_API}/authentication/sign-in`, body)
    .then(res => res.data);
