import React from "react";

const Signin = () => {
  return (
    <div className="text-white  py-5 bg-dark" style={{ height: "100vh" }}>
      <h1 className="text-center mt-5">Signin Form</h1>

      <form action="" className="col-md-6 mx-auto">
        <div className="p-2">
          <label htmlFor="email" className="py-2">
            Enter your email:{" "}
          </label>
          <input
            type="email"
            placeholder="email"
            className="form-control border border-dark"
            id="email"
            required
          />
        </div>
        <div className="p-2">
          <label htmlFor="pass" className="py-2">
            Enter your password:{" "}
          </label>
          <input
            type="password"
            placeholder="password"
            className="form-control border border-dark"
            id="pass"
            required
          />
        </div>
        <div className="mt-3 text-center">
          <button className="btn btn-success w-25">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
