import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLinks = ({ label, path, onclick }) => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link my-auto"
        to={path}
        isActive={(match) => match && match.isExact}
        onClick={onclick}
      >
        {label}
      </NavLink>
    </li>
  );
};

export default NavbarLinks;
