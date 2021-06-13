import produce from "immer";
import React, {
  ChangeEvent,
  Dispatch,
  Fragment,
  useEffect,
  useState,
} from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { IRegisterUser } from "../../models/types";
import _ from "lodash";
import { useAuthService } from "../../hooks";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { NotificationAction } from "../../redux/reducers/NotifyReducer";
import { loadUser, setError, setSuccess } from "../../redux/actions";
import { AuthAction } from "../../redux/reducers/AuthReducer";
import { Link } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState<IRegisterUser>({
    username: "",
    email: "",
    password: "",
  });
  const authService = useAuthService();
  const history = useHistory();
  const notifyDiapatch = useDispatch<Dispatch<NotificationAction>>();
  const authDispatch = useDispatch<Dispatch<AuthAction>>();

  const handleUpdateField = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      default:
        setUser(
          produce(user, (draft) => {
            _.set(draft, name, value);
          })
        );
        break;
    }
  };

  const handleSubmit = () => {
    const registerUser = async () => {
      try {
          const res = await authService.register(
          user.username,
          user.email,
          user.password
        );
        authDispatch(loadUser(res));
        history.push("/");
        notifyDiapatch(setSuccess("User Register successfully."));
      } catch (error) {
        notifyDiapatch(setError(error.data.errors));
      }
    };

    registerUser()
  };

  return (
    <Fragment>
      <div className="auth-container">
      <div className='banner'>
          <h1>Sign up</h1>
          <Link to="/login">already have an account?</Link>
        </div>
       
        <Form>
          <Form.Field>
            <label>Username</label>
            <Input
             size='small'
              name="username"
              placeholder="username"
              onChange={handleUpdateField}
              required
            />
          </Form.Field>

          <Form.Field>
            <label>Email</label>
            <Input
             size='small'
              name="email"
              placeholder="Email"
              onChange={handleUpdateField}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
             size='small'
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleUpdateField}
              required
            />
          </Form.Field>
          <Button attached="right" color="green" onClick={handleSubmit}>
            Sign up
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};
