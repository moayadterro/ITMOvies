import React from "react";
import logo from "images/logo.png";
import { Styles } from "./styles";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
function Footer() {
  return (
    <Styles>
      <Grid container>
        <Grid item xs={12} sm={4} md={4}>
          <Link to="/">
            <img src={logo} alt="ITMOVIES" className="logo" />
          </Link>
        </Grid>
        <Grid item xs={5} sm={3}>
          <div className="footer-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/signin" className="nav-link">
              sign in
            </Link>
            <Link to="/about-us" className="nav-link">
              About us
            </Link>
            <Link to="/signup" className="nav-link">
              create account
            </Link>
          </div>
        </Grid>
        <Grid item xs={7} sm={5} className="social-link-container">
          <div>
            <a
              href="https://www.facebook.com"
              rel="noreferrer"
              target="_blank"
              className="social-link"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              rel="noreferrer"
              target="_blank"
              className="social-link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              rel="noreferrer"
              target="_blank"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.twitter.com"
              rel="noreferrer"
              target="_blank"
              className="social-link"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com"
              rel="noreferrer"
              target="_blank"
              className="social-link"
            >
              <FaYoutube />
            </a>
          </div>
          <div className="copyrights">
            ITMOVIES 2022 &copy; All rights reserved
          </div>
        </Grid>
      </Grid>
    </Styles>
  );
}

export default Footer;
