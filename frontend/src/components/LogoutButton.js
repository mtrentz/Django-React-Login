import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LogoutButton = () => {
  const { logoutUser, authTokens } = useContext(AuthContext);
  return (
    <button onClick={() => logoutUser(authTokens.refresh)}>Log out</button>
  );
};

export default LogoutButton;
