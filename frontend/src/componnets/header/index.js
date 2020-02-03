import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {HeaderNavBar, HeaderRightNavBar} from "./style";

// 注销：Sign Out
// 注册 Sign Up
// 登录 Sign In

const Header = (props) => {

    const currentUser = useSelector(state => state.getIn(['auth', 'currentUserName']))

    return (
        <HeaderNavBar>
            {/* TODO use <Link> to replace heref*/}
            <div className="navbar-logo">
                <a href="v2ex">LaraForum</a>
            </div>
            <HeaderRightNavBar>
                <a href="Home">Home</a>
                <a href="Notes">Notes</a>
                {currentUser ?
                    <Link to='/logout'>Sign out </Link> : (
                        <Fragment>
                            <a href="Timeline">Timeline</a>
                            <a href="Settings">Settings</a>
                            <Link to="register">Sign Up</Link>
                            <Link to="login">Sign In</Link>
                        </Fragment>
                    )}

            </HeaderRightNavBar>
        </HeaderNavBar>
    )
}

export default Header;
