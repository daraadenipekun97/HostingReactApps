import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../Actions";

const getAuthState = (state) => state.auth;

function Login() {
  const dispatch = useDispatch();
  const { userLoginData, userLoggedIn } = useSelector(getAuthState);

  const handleLogin = () => {
    console.log("hello");
    dispatch(
      userLogin({
        email: "samprog4u@gmail.com",
        password: "12345678",
      })
    );
  };

  return (
    <div style={{ border: "solid" }}>
      <button onClick={handleLogin}>Loginn Here</button>
    </div>
  );
}

export default Login;
