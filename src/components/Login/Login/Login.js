import React, { useContext, useState } from "react";
import "./Login.css";
import login from "../../../images/login-img.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";
import { authContext } from "../../Context/UserContext";
import { BeatLoader } from "react-spinners";
const Login = () => {
  const [error, setError] = useState();
  const { userLogin, loading } = useContext(authContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });

    if (password.length < 6) {
      setError("password should be  six characters or more");
      return;
    }
  };
  return (
    <div className="login-container">
      <h1 className="text-center text-white text-4xl p-6">
        Login Your Account
      </h1>
      <div className="flex justify-center flex-wrap ">
        <div className="mx-auto">
          <img style={{ width: "550px", height: "500px" }} src={login} alt="" />
        </div>
        <div className="login-from">
          <UserIcon className="h-10 w-10 mx-auto user"></UserIcon>
          <h2 className="text-center name">
            SMART- <span className="color">WATCH</span>
          </h2>

          {!loading && (
            <form onSubmit={handleLogin}>
              <p>Email</p>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Entre Your Email"
              />
              <br />
              <p>Password</p>
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter Your Password"
              />
              <button type="submit" className="btn-login">
                Login
              </button>
            </form>
          )}
          {loading && <BeatLoader color="#36d7b7" className="text-center" />}
          <p>{error}</p>
          <p id="line-login">or using Social Media</p>
          <button className="socilal-btn-login ">Sign-In-Google</button>

          <p>
            Don't Have An Account?
            <Link to="/register">
              <span className="register">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
