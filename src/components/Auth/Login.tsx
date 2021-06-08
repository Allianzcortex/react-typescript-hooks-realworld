import React, { Dispatch, Fragment, useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import "./Login.css";
import { IError } from "../../models/types";
import produce from "immer";
import { AuthService } from "../../api/AuthService";
import { useAuthService } from "../../hooks";
import { useDispatch } from "react-redux";
import { ErrorAction } from "../../redux/reducers/ErrorReducer";

export default function Login() {
  // handle email/password/loading/conditions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<IError>([]);

  const authService = useAuthService();
  const errorDiapatch = useDispatch<Dispatch<ErrorAction>>();

  // use redux
  // if we find user existing, then redirect to home page

  const handleLogin = async () => {
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
      // setErrors(oldError=>[...oldError,`There should be no empty value.`])
    }
    // 2. custom errors check : return by backend
    try {
      const res = await authService.login("aa", "aa");
    } catch (error) {
      errorDiapatch({
        type: "SET_ERROR",
        messageType: "error",
        messageContent: "error",
      });
      console.log(error.data);
    }
  };

  return (
    <Fragment>
      <div>login</div>
    </Fragment>
  );
}
