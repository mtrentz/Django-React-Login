import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginForm = () => {
  const { loginUser } = useContext(AuthContext);
  return (
    <form onSubmit={loginUser}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          aria-describedby="username"
          placeholder="Username..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          aria-describedby="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
