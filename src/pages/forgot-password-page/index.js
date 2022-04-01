import React from "react";
import NavBar from "components/navbar";
import AppTemplate from "templates/app-template";
import { Styles } from "./styles";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function ForgotPasswordPage(props) {
  const sendEmail = (event) => {
    event.preventDefault();
  };

  return (
    <AppTemplate nav={<NavBar />}>
      <Styles>
        <div className="container">
          <h1>Send Reset email</h1>
          <form method="post">
            <TextField
              fullWidth
              name="email"
              label="Email address"
              className="input-form"
            />

            <Button
              type="submit"
              variant="contained"
              className="submit-btn"
              onClick={sendEmail}
            >
              Send code
            </Button>
          </form>

          <Link to="/reset-password" className="link mt-2">
            already have a code?
          </Link>
        </div>
      </Styles>
    </AppTemplate>
  );
}

export default ForgotPasswordPage;
