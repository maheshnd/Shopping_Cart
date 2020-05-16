import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAthenticated } from "./index";

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAthenticated() && isAthenticated().user.role === 1 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
