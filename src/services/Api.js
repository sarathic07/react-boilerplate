import axios from "./axios";

const login = (email, password) => {
  return axios.post("/user/sign-in", { email: email, password: password });
};

const Api = {
  login
};

export default Api;
