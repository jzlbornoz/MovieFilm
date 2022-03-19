import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-7635vyd5.us.auth0.com"
      clientId="jWJBo4uXORqs4unVjkQgTUil8vityXQs"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
