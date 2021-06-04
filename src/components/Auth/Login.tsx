import {
  AppBar,
  Button,
  Icon,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Login.css";
import { IError } from "../../models/Errors";
import produce from "immer";
import { AuthService } from "../../api/AuthService";
import { useAuthService } from "../../hooks";

export default function Login() {
  // handle email/password/loading/conditions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<IError>([]);

  const authService = useAuthService()

  // use redux
  // if we find user existing, then redirect to home page

  const handleLogin = async() =>  {
    // clear all errors
    // 1. empty check

    setErrors([]);
    // setErrors(
    //   produce(errors, (draft) => {
    //     draft.splice(0, draft.length);
    //   })
    // );

    // const values = {"email":email,"password":password};
    // Object.entries(values).forEach(([item,value]) => {
    if (email === "" || password === "") {
      // setErrors(
      //   produce(errors, (draft) => {
      //     draft.push(`There should be no empty value.`);
      //   })
      // );
      setErrors(oldError=>[...oldError,`There should be no empty value.`])
    }
    // 2. custom errors check : return by backend
    const res =await authService.login("aa","aa")
    console.log(res)
  };

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="title">
            Conduit
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">
            <CreateIcon />
            New Article
          </Button>
          <Button color="inherit">
            <SettingsIcon />
            Settings
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <div className="border">
        <form className="login-form">
          {errors
            ? errors.map((item, index) => <div key={index}>{item}</div>)
            : ""}

          <TextField
            required
            error={errors.length !== 0 && email === ""}
            id="email-required"
            label="Email"
          />
          <TextField
            required
            error={errors.length !== 0 && password === ""}
            id="password-required"
            label="Password"
          />
          <Button
            className="login-button"
            variant="contained"
            size="small"
            color="primary"
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </div>
    </Fragment>
  );
}
