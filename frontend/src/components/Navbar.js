import React from "react";
import { Link } from "react-router-dom";
// import Home from '../pages/Home'
// import Login from '../pages/Login'
// import Register from '../pages/Register'

const Navbar = () => {
  const nav = {
    display: "flex",
    gap: "10px",
  };
  return (
    <nav style={nav}>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/login">
        <div>Login</div>
      </Link>
      <Link to="/register">
        <div>Register</div>
      </Link>
    </nav>
  );
};

export default Navbar;
