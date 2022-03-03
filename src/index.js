import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
const domain = "dev-7vkm4p4o.us.auth0.com";
const clientId = "TW7fJ3S3wI6G7eK8ojjPweQFIO1oLHBw";
ReactDOM.render(
  <Auth0Provider
    domain="dev-7vkm4p4o.us.auth0.com"
    clientId="TW7fJ3S3wI6G7eK8ojjPweQFIO1oLHBw"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
