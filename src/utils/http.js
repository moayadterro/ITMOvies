import axios from "axios";
import Cookies from "js-cookie";
import { decodeBase64 } from "./base64";

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

http.setAuthorizationToken = (token) => {
  http.defaults.headers.common["Authorization"] = "Bearer " + token;
};

http.interceptors.request.use((request) => {
  let base64Token = Cookies.get("uat");
  let token = base64Token ? decodeBase64(base64Token) : null;
  if (token) request.headers.Authorization = "Bearer " + token;
  return request;
});

http.interceptors.response.use(
  (response) => {
    if (response.status === 204) {
      return;
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.defaults.headers.common["Content-Type"] = "application/json";
http.defaults.headers.common.Accept = "application/json";
// don't uncomment this it will make a CROS Error from the Server
// instance.defaults.headers["Cache-Control"] = "no-cache";

export default http;
