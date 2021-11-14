import { createContext, useState } from "react";
import AxiosInstance from "../AxiosConfig";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await AxiosInstance.post("/token/", {
      username: e.target.username.value,
      password: e.target.password.value,
    });

    if (response.status === 200) {
      setAuthTokens(response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      navigate("/");
    } else {
      console.log("Login Failed");
    }
  };

  let logoutUser = () => {
    AxiosInstance.post("/user/logout/", {
      refresh: authTokens.refresh,
    });
    setAuthTokens(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  let contextData = {
    authTokens: authTokens,
    setAuthTokens: setAuthTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
