import React, {
  ChangeEvent,
  Dispatch,
  Fragment,
  SyntheticEvent,
  useState,
} from "react";
import { Button, Form, Menu, Segment } from "semantic-ui-react";
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

export default function Login() {
  // handle email/password/loading/conditions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      authDispatch(loadUser(res));
      history.push("/");
      notifyDiapatch(setSuccess("Login Successfully."));
    } catch (error) {
      notifyDiapatch(setError(error.data.errors));
    }
  };

  return (
    <Fragment>
      <div className="login-container">
        <Form>
          <Form.Field>
            <label>Email</label>
            <input
              name="Email"
              placeholder="Email"
              onChange={handleUpdateField}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              name="Password"
              placeholder="Password"
              onChange={handleUpdateField}
              required
            />
          </Form.Field>
          {/* <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field> */}
          <Button attached="right" color="green" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </Fragment>
  );
}
