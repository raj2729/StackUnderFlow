import React, { useState, useEffect } from "react";
import { Envelope, Lock, ArrowLeft } from "react-bootstrap-icons";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import FormControl from "../../UI/FormControl";
import Button from "../../UI/Button";
import useStore from "../../context/useStore";
import useAuthHook from "../../hooks/useAuthHook";
import alanBtn from "@alan-ai/alan-sdk-web";

const Login = () => {
  const { login } = useAuthHook();
  const [loginData, setLoginData] = useState({});
  const { user } = useStore();
  const getlocation = useLocation();
  const path = getlocation?.state?.location;
  const alanKey = "cfdac5b36d0a78de9cd6709b0a7e592e2e956eca572e1d8b807a3e2338fdd0dc/stage";
    const navigate = useNavigate()
  // useEffect(() => {
  //   alanBtn({
  //     key: alanKey,
  //     onCommand: ({ command }) => {
  //       if (command === "login") {
  //         navigate("/signin");
  //       } else if (command === "signup") {
  //         navigate("/signup");
  //       } else if (command === "home") {
  //         navigate("/");
  //       } else if (command === "maps") {
  //         navigate("/map");
  //       } else if (command === "blogs") {
  //         navigate("/blogs");
  //       }
  //     },
  //   });
  // }, []);
  const getLoginData = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "email") {
      value = value.toLowerCase();
    }
    const newData = { ...loginData };
    newData[name] = value;
    setLoginData(newData);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    login(loginData);
  };

  return (
    <div className="h-screen bg-red-800 flex items-center justify-center">
      {user.id && path && <Navigate to={path} />}
      {user.id && !path && <Navigate to="/" />}
      <div className="relative bg-white w-[25rem] mx-2 py-16 flex items-center justify-center rounded-xl sm:w-[27rem]">
        <Link to="/">
          <ArrowLeft className="absolute top-4 left-11 text-2xl cursor-pointer text-gray-600 hover:text-gray-900" />
        </Link>
        <br /><br /><br />
        <form className="w-4/5 h-full" onSubmit={submitLogin}>
          <h2 className="text-4xl font-semibold mb-12">Login</h2>
          <div className="flex flex-col items-start gap-6 mb-12">
            <FormControl
              type="email"
              label="email"
              icon="PERSON"
              onChange={getLoginData}
            />
            <FormControl
              type="password"
              label="password"
              icon="LOCK"
              onChange={getLoginData}
            />
            <a
              href="#"
              className="relative text-gray-700 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:scale-x-0  after:bg-current hover:text-gray-800 hover:font-semibold transition-all duration-200 after:transition-all hover:after:scale-x-100"
            >
              Forgot password
            </a>
          </div>
          <Button isPrimary={true} isWidthFull={true} type="submit">
            Log In
          </Button>

          <p className="text-center mt-5">
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="text-primary-color-dark font-semibold"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
