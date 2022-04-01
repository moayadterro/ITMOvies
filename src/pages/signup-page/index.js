import React from "react";
import NavBar from "components/navbar";
import AppTemplate from "templates/app-template";
import { Styles } from "./styles";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function SignUpPage(props) {
  const doSignUp = (event) => {
    event.preventDefault();
  };

  return (
    <AppTemplate nav={<NavBar />}>
      <Styles>
        <div className="container">
          <h1>Create new account</h1>
          <form method="post">
            <TextField
              fullWidth
              name="name"
              label="Full name"
              className="input-form"
            />
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
              onClick={doSignUp}
            >
              Create account
            </Button>
          </form>
          <div className="navigate">
            <p>Already have an account!&nbsp;</p>
            <Link to="/signin" className="link">
              Login now
            </Link>
          </div>
        </div>
      </Styles>
    </AppTemplate>
  );
}

export default SignUpPage;
