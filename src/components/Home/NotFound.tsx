import React, { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { NotificationAction } from "../../redux/reducers/NotifyReducer";

import { setWarning } from "../../redux/actions";
import { Message } from "semantic-ui-react";

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
    }, 2500);
  }, []);

  return (
    <div className="middle-container">
      <Message negative>
        <Message.Header>URL DOES NOT EXIST ┭┮﹏┭┮！！！！</Message.Header>
      </Message>
      <img src={`notfound.jpg`} />
    </div>
  );
};
