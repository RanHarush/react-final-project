import React from "react";
import {
  links,
  loggedIn,
  loggedOut,
  dropdownLinks,
} from "components/navbar/links";
import NavbarLinks from "partials/NavbarLinks";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "store/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const userData = useSelector((state) => state.auth.userData);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(authActions.logout());
    history.push("/");
    dispatch(authActions.loading());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <NavLink className="navbar-brand ms-4" to="/">
        Fugazi App
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse ms-sm-0 ms-4 row row-cols-sm-auto row-cols-3"
        id="navbarColor01"
      >
        <ul className="navbar-nav me-auto py-3">
          {links.map((item, idx) => (
            <NavbarLinks
              label={item.label}
              path={item.path}
              key={`link_ + ${idx}`}
            />
          ))}
          {isLogged
            ? dropdownLinks.map((item, index) => (
                <li className="nav-item dropdown" key={"dropdown_" + index}>
                  <NavLink
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                  <ul className="dropdown-menu bg-info ps-3 ps-sm-0">
                    {item.profileLink.map((item, index) => (
                      <NavbarLinks
                        key={"dropdownLink_" + index}
                        label={item.label}
                        path={item.path}
                      />
                    ))}
                    {userData &&
                      userData.biz &&
                      item.bizLinks.map((item, idx) => (
                        <NavbarLinks
                          label={item.label}
                          path={item.path}
                          key={`bizLink_ + ${idx}`}
                        />
                      ))}
                  </ul>
                </li>
              ))
            : ""}
        </ul>
        <ul className="navbar-nav ms-auto me-4 py-3">
          <NavbarLinks
            path="/profileInfo"
            label={isLogged ? `Welcome ${userData.name}` : null}
          />
          {(isLogged ? loggedIn : loggedOut).map((item, idx) => (
            <NavbarLinks
              label={item.label}
              path={item.path}
              key={`logged_ + ${idx}`}
              onclick={item.label === "Logout" ? handleLogout : null}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
