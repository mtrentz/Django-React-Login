import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const baseURL = "http://127.0.0.1:8000/api";

export { baseURL };

const useAxios = () => {
  var { authTokens, setAuthTokens } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens?.access}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    if (!authTokens) return req;

    //   TODO: Quero conferir se o refresh tb não ta expirado, se tiver, redirecionar para o login
    const token = jwt_decode(authTokens.access);
    const isExpired = dayjs.unix(token.exp).diff(dayjs()) < 1;
    console.log(isExpired);
    // Caso não esteja expirado, retorna o request normalmente
    if (!isExpired) return req;

    const refreshToken = async () => {
      try {
        const resp = await axios.post(`${baseURL}/token/refresh/`, {
          refresh: authTokens.refresh,
        });
        console.log("Refresh success");
        setAuthTokens(resp.data);
        localStorage.setItem("authTokens", JSON.stringify(resp.data));
        req.headers.Authorization = `Bearer ${resp.data.access}`;
      } catch (err) {
        if (err.response) {
          console.log("Refresh error");
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    await refreshToken();

    return req;
  });

  return axiosInstance;
};

export default useAxios;
