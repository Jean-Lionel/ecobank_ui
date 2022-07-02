import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import "currency-flags"
import "./asset/flag/style.css"

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/api';
//axios.defaults.baseURL = 'http://192.168.0.22:8000/api';
//axios.defaults.baseURL = 'https://onprapi.herokuapp.com/api';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    //console.log(request);
    // Edit request config
    return request;
}, error => {
   // console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  //  console.log(response);
    // Edit response config
    return response;
}, error => {
   // console.log(error);
    return Promise.reject(error);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

