import axios from 'axios';

const myAxios = axios.create({
  baseURL: `${process.env.baseApiUrl}`,
});

const clientAxios = axios.create({
  baseURL: `${process.env.baseApiUrl}`,
});

myAxios.defaults.headers.post['Content-Type'] = 'application/json';
clientAxios.defaults.headers.post['Content-Type'] = 'application/json';

myAxios.interceptors.request.use(
  (config) => {
    const token = window.sessionStorage.getItem('token');

    if (token) {
      config.headers['Authorization'] = token;
    }

    return config;
  },
  (err) => {
    // return err;
    Promise.reject(err);
  }
);

export { myAxios, clientAxios };
