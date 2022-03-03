import Login from "./Login";
import Logout from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();
  if (isLoading) {
    return <div>isLoading...</div>;
  }
  return (
    <>
      <Login />
      <Logout />
    </>
  );
}

export default App;
