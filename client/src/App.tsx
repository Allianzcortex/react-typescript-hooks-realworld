import React, {useState} from 'react';
import logo from './logo.svg';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Link, Switch, Route, NavLink, useHistory, Redirect} from 'react-router-dom';
import {store} from "./store";
import './App.css';
import {Test} from "./components/Test";
import {List, Menu, Segment} from "semantic-ui-react";
import {render} from "react-dom";
import {LoginModal} from "./components/auth/LoginModal";
import {Dashboard} from "./components/admin/Dashboard";
import {Notification} from "./components/utils/Notification";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    let linkUrl = window.location.pathname.split('/')[-1];
    const [activeNav, setActiveNav] = useState(linkUrl);
    const [showLoginModal,setShowLoginModal]=useState(false);
    const navList = ['Blog', 'Archive', 'Category', 'Tag', 'About','Admin'];

    return (
        <Provider store={store}>
            {/*<Test/>*/}
            <Router>
                <Segment >
                    <Menu  pointing >
                        {
                            navList.map(nav => (
                                <Menu.Item as={Link}
                                           to={"/"+nav}
                                           name={nav}
                                           active={activeNav === nav}
                                           onClick={() => {
                                               setActiveNav(nav)
                                           }}
                                >
                                </Menu.Item>
                            ))
                        }
                        {/*<Menu.Item name='admin'*/}
                        {/*           active={activeNav === 'admin'}*/}
                        {/*onClick={()=>{setActiveNav('admin')}}*/}
                        {/*/>*/}
                    </Menu>
                </Segment>
                <Notification/>
                <ToastContainer
                    position="top-center"
                    autoClose={1500}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                />
                <Switch>
                    <Route path="/Admin">
                        <Dashboard />
                    </Route>
                </Switch>

            </Router>
        </Provider>
    );
}

export default App;
