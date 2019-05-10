import axios from "axios";
import env from "../../env";

const instance = axios.create({
  baseURL: env.base_url,
  withCredentials: true,
  timeout: 10000
});

instance.interceptors.response.use(response => {
  response.ok = response.status >= 200 && response.status <= 299;

  return response;
});

instance.interceptors.response.use(response => {
  if (response.config.url.endsWith("/user/sign-in")) {
    localStorage.setItem("jwt", response.data);
  }

  return response;
});

instance.interceptors.request.use(config => {
  const jwt = JSON.parse(localStorage.getItem("jwt"));

  if (jwt) {
    if (new Date(jwt.exp * 1000).getTime() >= new Date().getTime()) {
      config.headers.common["Authorization"] = `Bearer ${jwt.token}`;
    } else {
      localStorage.removeItem("jwt");
    }
  }

  config.headers.common["Cache-Control"] = "no-cache";

  return config;
});

export default instance;
