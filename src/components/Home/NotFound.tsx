import React, { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { NotificationAction } from "../../redux/reducers/NotifyReducer";

import notfound from "../../notfound.jpg";
import {setWarning } from "../../redux/actions";

export const NotFound = () => {
  const history = useHistory();
  const notifyDispatch = useDispatch<Dispatch<NotificationAction>>();

  useEffect(() => {
    notifyDispatch(
      setWarning(
        "current path doesn't exist and you will be redirected to home page soon..."
      )
    );
    setTimeout(() => {
      history.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      404 NOT FOUND
      <img src={notfound} />
    </div>
  );
};
