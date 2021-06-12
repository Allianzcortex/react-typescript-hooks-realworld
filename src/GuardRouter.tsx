import React, { Component, Dispatch, FC, Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser, logoutUser } from "./redux/actions";
import { AuthAction } from "./redux/reducers/AuthReducer";
import { getLocalStorage } from "./utils";

interface props {
  Comp: FC;
}

export const GuardRouter = ({ Comp }: props) => {
  const authDispatch = useDispatch<Dispatch<AuthAction>>();

  useEffect(() => {
    if (getLocalStorage("token")) {
      authDispatch(loadUser("123"));
    } else {
      authDispatch(logoutUser());
    }
  }, []);

  return <Comp />;
};
