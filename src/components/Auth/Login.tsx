import React, {
  ChangeEvent,
  Dispatch,
  Fragment,
  SyntheticEvent,
  useState,
} from "react";
import {
  Button,
  Form,
  Input,
  Menu,
  Segment,
  Popup,
  Icon,
} from "semantic-ui-react";
import "./Login.css";
import { IError } from "../../models/types";
import produce from "immer";
import { AuthService } from "../../api/AuthService";
import { useAuthService } from "../../hooks";
import { useDispatch } from "react-redux";
import { NotificationAction } from "../../redux/reducers/NotifyReducer";
import { AuthAction } from "../../redux/reducers/AuthReducer";
import { loadUser, setError, setSuccess } from "../../redux/actions";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Login() {
  // handle email/password/loading/conditions
  const [email, setEmail] = useState("aaaaaaaa@aaa.com");
  const [password, setPassword] = useState("aaaaaaaa");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<IError>([]);

  const authService = useAuthService();
  const history = useHistory();
  const notifyDiapatch = useDispatch<Dispatch<NotificationAction>>();
  const authDispatch = useDispatch<Dispatch<AuthAction>>();

  const handleUpdateField = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "Email":
        setEmail(value);
        break;
      case "Password":
        setPassword(value);
        break;
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const res = await authService.login(email, password);
      // need type strickt check to know returned object is whether a
      authDispatch(loadUser(res));
      history.push("/");
      notifyDiapatch(setSuccess("Login Successfully."));
    } catch (error) {
      notifyDiapatch(setError(error.data.errors));
    }
  };

  return (
    <Fragment>
      <div className="auth-container">
        {/* css-in-js can be a better solution here tho */}
        <div className="banner">
          <h1>Sign in</h1>
          <Link to="/register">Need an account?</Link>
        </div>
        <Form>
          <Form.Field>
            <Popup
              content="aaaaaaaa is a sample email for use"
              trigger={
                <label>
                  Email&nbsp;&nbsp;<Icon size="small" name="info"></Icon>
                </label>
              }
            />
            <Input
              size="small"
              name="Email"
              placeholder="Email"
              onChange={handleUpdateField}
              defaultValue="aaaaaaaa@aaa.com"
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              size="small"
              name="Password"
              type="password"
              placeholder="Password"
              onChange={handleUpdateField}
              defaultValue="aaaaaaaa"
              required
            />
          </Form.Field>
          <Button attached="right" color="green" onClick={handleSubmit}>
            Sign In
          </Button>
        </Form>
      </div>
    </Fragment>
  );
}
