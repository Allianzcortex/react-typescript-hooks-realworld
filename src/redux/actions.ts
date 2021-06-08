import { IUser } from "../models/types";
import { AuthAction } from "./reducers/AuthReducer";
import { NotificationAction } from "./reducers/NotifyReducer";

// -----------------------------------------------
// Auth part
export const loginUser: () => AuthAction = () => {
  return {
    type: "LOGIN",
  };
};

export const logoutUser: () => AuthAction = () => {
  return {
    type: "LOGOUT",
  };
};

export const loadUser: (user: IUser) => AuthAction = (user: IUser) => {
  return {
    type: "LOAD_USER",
    user: user,
  };
};

// -----------------------------------------------
// Notification part
export const setError: (data: object | string) => NotificationAction = (
  data: object | string
) => {
  return {
    type: "SET_ERROR",
    messageType: "error",
    messageContent: data,
  };
};

export const setSuccess: (data: object | string) => NotificationAction = (
  data: object | string
) => {
  return {
    type: "SET_SUCCESS",
    messageType: "success",
    messageContent: data,
  };
};

export const clear: () => NotificationAction = () => {
  return {
    type: "CLEAR",
  };
};
