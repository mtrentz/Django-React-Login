import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LogoutButton = () => {
  const { logoutUser } = useContext(AuthContext);
  return <button onClick={logoutUser}>Log out</button>;
};

export default LogoutButton;
