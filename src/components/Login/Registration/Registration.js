import React, { useContext, useState } from "react";
import "./Registration.css";
import login from "../../../images/login-img.png";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";
import { BeatLoader } from "react-spinners";
import { authContext } from "../../Context/UserContext";

const Registration = () => {
  const [error, setError] = useState();
  const { createUser, signInGoogle, updateUserProfile, loading } =
    useContext(authContext);

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const confirm = from.confirm.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUserUpdate(name);
      })
      .catch((error) => {
        console.error(error);
      });
    navigate("/");
    if (password.length < 6) {
      setError("password should be  six characters or more");
      return;
    }
    if (password !== confirm) {
      setError("your password did not match");
      return;
    }
    alert("user created successfully");
  };
  // updateProifile:

  const handleUserUpdate = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .then((error) => console.error(error));
  };
  const signInWithGoogle = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="register-container">
      <h1 className="text-center p-4 text-white text-4xl">
        SignUp Your Account
      </h1>
      <div className="flex justify-center flex-wrap p-5">
        <div className="mx-auto">
          <img style={{ width: "550px", height: "500px" }} src={login} alt="" />
        </div>
        <div className="register-from">
          <UserIcon className="h-10 w-10 mx-auto user"></UserIcon>
          <h2 className="text-center name">
            SMART- <span className="color">WATCH</span>
          </h2>
          {!loading && (
            <form onSubmit={handleRegister}>
              <p>Name</p>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Entre Your Name"
              />
              <br />
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
                placeholder="Entre Your Passwoard "
              />
              <p>Re-Password</p>
              <input
                type="password"
                name="confirm"
                id=""
                placeholder="Enter Your Re- Password"
              />
              <button type="submit" className="register-btn">
                Register
              </button>
              <p>{error}</p>
            </form>
          )}
          {loading && <BeatLoader color="#36d7b7" className="text-center" />}
          <p id="line">or using Social Media</p>
          <button onClick={signInWithGoogle} className="socilal-btn">
            Sign-In-Google
          </button>

          <p>
            All ready Have An Account?
            <Link to="/login">
              <span className="register">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
