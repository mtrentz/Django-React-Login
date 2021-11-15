import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../utils/useAxios";
import axios from "axios";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  var [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const navigate = useNavigate();

  const loginUser = async (e) => {
    console.log(baseURL);
    e.preventDefault();
    axios
      .post(`${baseURL}/token/`, {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((response) => {
        localStorage.setItem("authTokens", JSON.stringify(response.data));
        console.log("login successful");
        setAuthTokens(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log("Login failed.");
        console.log(error);
      });
  };

  let logoutUser = (refresh) => {
    axios
      .post(`${baseURL}/user/logout/`, {
        refresh: refresh,
      })
      .then((response) => {
        console.log("Logout successful");
        localStorage.removeItem("authTokens");
        setAuthTokens(null);
        navigate("/");
      })
      .catch((error) => {
        console.log("Logout failed");
        console.log(error);
      });
  };

  const contextData = {
    authTokens: authTokens,
    setAuthTokens: setAuthTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
