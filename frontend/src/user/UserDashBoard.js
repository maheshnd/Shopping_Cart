import React from "react";
import Base from "../core/Base";
import { isAthenticated } from "../auth/helper";
const UserDashBoard = () => {
  const {
    user: { name }
  } = isAthenticated();

  return (
    <Base title="UserDashBoard page">
      <h1>Welcome back {name}</h1>
    </Base>
  );
};

export default UserDashBoard;
