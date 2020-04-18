import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

instance.defaults.headers.commn["Authorization"] = "AUTH_TOKEN FROM INSTANCE";

export default axios;
