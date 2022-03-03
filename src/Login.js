import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();
  return (
    <>
      {!isAuthenticated && <button onClick={loginWithRedirect}>Login</button>}
      {isAuthenticated && <img src={user.picture} alt="None" />}
    </>
  );
};

export default Login;
