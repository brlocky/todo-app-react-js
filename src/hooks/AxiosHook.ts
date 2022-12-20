import axios from 'axios';

// Request interceptor for API calls
axios.interceptors.request.use(
  async (config) => {
    // const token = await getTokenSilently();
    // config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async function (error) {
    if (error.response?.status === 401 || error?.error === 'login_required') {
      //   history.push(urls.authentication);
    }
    return Promise.reject(error);
  }
);
