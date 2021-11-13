import React from "react";

const RegisterForm = () => {
  return (
    <form>
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
          id="Password"
          placeholder="Password"
          aria-describedby="Password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="Password2">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="Password2"
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
