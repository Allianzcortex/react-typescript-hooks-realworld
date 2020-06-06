import React, {FC, Fragment} from "react"
import {Button, Form, Input, Modal} from "semantic-ui-react";
import {login} from "../../store/actions/auth.action";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types/interfaces";
import {useHistory} from "react-router";

export const LoginModal: FC<{}> = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.loggedIn)
    const history = useHistory();
    const handleLoginFormSubmit = (e: any) => {
        e.preventDefault();
        dispatch(login("123", "456"));
        // TODO note I prefer to push redirect login into
        // component rather than into dispatch logic
        if (isAuthenticated)
            history.push('/admin');
        console.log("submit");
    }
    return (
        <Fragment>
            <Modal
                defaultOpen={true}
                closeIcon
                dimmer={"blurring"}>
                <Modal.Header>Login Form</Modal.Header>
                <Modal.Content>
                    <Form size={'large'}>
                        <Form.Field label="Email" width='8'
                                    control={Input}
                            // type="email"
                            //         required
                            // error={{
                            //     content: 'Please enter a valid email address',
                            //     pointing: 'below',
                            // }}
                        >
                        </Form.Field>
                        <Form.Field width='8'>
                            <label>Password</label>
                            <input placeholder={"password"}/>
                        </Form.Field>
                        <Button onClick={handleLoginFormSubmit} type='submit'>Login</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </Fragment>
    )
}


