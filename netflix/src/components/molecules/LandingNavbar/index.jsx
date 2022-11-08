import React from "react";
import logo from "../../../assets/Logonetflix.png";
import { Image } from "../../atoms/Image";
import { Nav, NavLeft, NavRight } from "./app";

export const LandingNavbar = () => {
  return (
    <>
      <Nav>
        <NavLeft>
          <Image src={logo} alt="logo" className="landing-logo" />
        </NavLeft>
        <NavRight>
          <button className="landing-nav-btn">Sign In</button>
        </NavRight>
      </Nav>
    </>
  );
};
