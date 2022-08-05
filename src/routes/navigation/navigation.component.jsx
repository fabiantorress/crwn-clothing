import { Outlet, Link } from "react-router-dom";

import { Fragment } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="sign-in-container" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet /> {/* Outler renders everything what is inside it */}
    </Fragment>
  );
};

export default Navigation;
