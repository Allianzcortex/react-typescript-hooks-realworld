import React, { Component, Dispatch, FC, Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser, logoutUser } from "./redux/actions";
import { AuthAction } from "./redux/reducers/AuthReducer";
import { getLocalStorage, getUserFromJWT } from "./utils";

interface props {
  Comp: FC;
}

export const GuardRouter = ({ Comp }: props) => {

  const authDispatch = useDispatch<Dispatch<AuthAction>>();

  useEffect(() => {
    const user = getUserFromJWT(getLocalStorage("token"));
    if (user !== null) {
      authDispatch(loadUser(user));
    } else {
      authDispatch(logoutUser());
    }
  }, []);

  return <Comp />;
};
