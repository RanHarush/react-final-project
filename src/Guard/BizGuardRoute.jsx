import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const BizGuardRoute = ({ component: Page, ...rest }) => {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <Route
      {...rest}
      render={(props) =>
        userData && userData.biz ? <Page {...props}></Page> : <Redirect to="login" />
      }
    />
  );
};

export default BizGuardRoute;
