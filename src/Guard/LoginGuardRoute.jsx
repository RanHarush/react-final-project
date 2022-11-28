import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const LoginGuardRoute = ({ component: Page, ...rest }) => {
  const isLogged = useSelector((state) => state.auth.isLogged);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Page {...props}></Page> : <Redirect to="login" />
      }
    />
  );
};

export default LoginGuardRoute;
