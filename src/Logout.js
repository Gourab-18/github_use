import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();
  return (
    <>{isAuthenticated && <button onClick={() => logout()}>Logout</button>}</>
  );
};

export default Logout;
