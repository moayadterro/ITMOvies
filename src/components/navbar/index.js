import React from "react";
import logo from "images/logo.png";
import { Styles } from "./styles";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

function NavBar({ background }) {
  return (
    <Styles background={background}>
      <div className={`container ${background ? "blur" : ""}`}>
        <Link to="/">
          <img src={logo} alt="moviestack" className="logo" />
        </Link>

        <div className="nav-items">
          <Link to="/signin" className="nav-link">
            <FiLogIn />
            Sign in
          </Link>
          <Link to="/signup" className="nav-link">
            <AiOutlineUsergroupAdd fontSize="20px" />
            Sign up
          </Link>
        </div>
      </div>
    </Styles>
  );
}

export default NavBar;
