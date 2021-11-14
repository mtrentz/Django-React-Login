import React from "react";
import axiosInstance from "../AxiosConfig";

const RegisterForm = () => {
  const registerUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
      password2: form.password2.value,
    };
    axiosInstance
      .post("/user/register/", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={registerUser}>
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
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          aria-describedby="email"
          placeholder="Email..."
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
      <div className="form-group">
        <label htmlFor="Password2">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="password2"
          placeholder="Confirm Password"
          aria-describedby="Confirm Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
