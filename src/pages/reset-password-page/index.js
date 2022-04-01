import React from "react";
import NavBar from "components/navbar";
import AppTemplate from "templates/app-template";
import { Styles } from "./styles";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function ResetPasswordPage(props) {
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
              Reset Password
            </Button>
          </form>
          <div className="navigate">
            <p>didn't receive a code!&nbsp;</p>
            <Link to="/forgot-password" className="link">
              Resend email
            </Link>
          </div>
        </div>
      </Styles>
    </AppTemplate>
  );
}

export default ResetPasswordPage;
