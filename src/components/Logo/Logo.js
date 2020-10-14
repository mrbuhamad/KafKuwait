import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ url }) => {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src={url} alt="logo" />
      </NavLink>
    </div>
  );
};

export default Logo;
