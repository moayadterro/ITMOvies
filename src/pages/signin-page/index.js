import React from "react";
import NavBar from "components/navbar";
import AppTemplate from "templates/app-template";
import { Styles } from "./styles";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function LoginPage(props) {
  const doSignIn = (event) => {
    event.preventDefault();
  };

  return (
    <AppTemplate nav={<NavBar />}>
      <Styles>
        <div className="container">
          <h1>Sign in</h1>
          <form method="post">
            <TextField
              fullWidth
              name="email"
              label="Email address"
              className="input-form"
            />
            <TextField
              fullWidth
              name="password"
              label="Password"
              className="input-form"
            />
            <Button
              type="submit"
              variant="contained"
              className="submit-btn"
              onClick={doSignIn}
            >
              Sign in
            </Button>
          </form>
          <div className="navigate">
            <p>Don't have an account!&nbsp;</p>
            <Link to="/signup" className="link">
              Create account
            </Link>
          </div>
          <Link to="/forgot-password" className="link">
            Forgot your password?
          </Link>
        </div>
      </Styles>
    </AppTemplate>
  );
}

export default LoginPage;
