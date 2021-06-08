import React, { ChangeEvent, Dispatch, Fragment, SyntheticEvent, useState } from "react";
import { Button, Form, Menu, Segment } from "semantic-ui-react";
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

  const handleUpdateField=(event:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = event.target
    switch(name) {
      case 'Email':
        setEmail(value);
        break;
      case 'Passowrd':
        setPassword(password)
        break;
    }
  }
  
  const handleSubmit = async (event:any) => {
    event.preventDefault()

    try {
      const res = await authService.login(email,password);
    } catch (error) {
      errorDiapatch({
        type: "SET_ERROR",
        messageType: "error",
        messageContent: error.data.errors,
      });
      
    }
  };

  return (
    <Fragment>
      <div className="login-container">
      <Form>
    <Form.Field>
      <label>Email</label>
      <input name="Email" placeholder='Email' onChange={handleUpdateField} required />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input name="Password" placeholder='Password' onChange={handleUpdateField} required />
    </Form.Field>
    {/* <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field> */}
    <Button attached='right' color='green' onClick={handleSubmit} >Submit</Button>
  </Form>
  </div>
    </Fragment>
  );
}
