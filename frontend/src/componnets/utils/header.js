import styled from "styled-components";
import React, {Fragment, useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppBar, Toolbar, Typography, Button, IconButton,} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

export const HeaderNavBar = styled.div`
display:flex;
    justify-content: space-between;
    background-color: white;
    position: fixed;
    top:0px;
    width: 100%;
    height: 45px;
    vertical-align: middle;
     line-height: 45px;
      /* border:1px solid blue; */
    left:0px;
    
    // TODO 再看 styled components 里类选择器的套用方法
    a {
    color:#556;
    text-decoration: none;
    font-size: 20px;
    font-weight:500;
    margin-left: 250px;
    }
`

export const HeaderRightNavBar = styled.div`
    display:flex;
    justify-content: space-around;
    margin-right: 200px;
    
    a {
     color:#556;
    text-decoration: none;
    /* border:1px solid blue; */
    margin-left:5px;
    margin-right:5px;
    font-weight: 350;
    }
`


// 注销：Sign Out
// 注册 Sign Up
// 登录 Sign In

const HeaderBar = styled.div`
    
    header {
    flex-direction: row;
    justify-content: space-between;
    }

    .MuiTypography-root {
        margin-left:10px;
        }
        .test-button {
          
        }
        
        a:hover {
        color:black;
        }

`

const Header = (props) => {

    const currentUser = useSelector(state => state.getIn(['auth', 'currentUserName']))

    useEffect(() => {
        console.log('header loaded')
    }, [])

    // return (
    //     <HeaderNavBar>
    //         {/* TODO use <Link> to replace heref*/}
    //         <div className="navbar-logo">
    //             <a href="v2ex">LaraForum</a>
    //         </div>
    //         <HeaderRightNavBar>
    //             <a href="Home">Home</a>
    //             <a href="Notes">Notes</a>
    //             {currentUser ?
    //                 <Link to='/logout'>Sign out </Link> : (
    //                     <Fragment>
    //                         <a href="Timeline">Timeline</a>
    //                         <a href="Settings">Settings</a>
    //                         <Link to="register">Sign Up</Link>
    //                         <Link to="login">Sign In</Link>
    //                     </Fragment>
    //                 )}
    //
    //         </HeaderRightNavBar>
    //     </HeaderNavBar>
    // )
    return (
        <HeaderBar>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>

                </Toolbar>
                <Button href="/text" className="test-button" color="inherit">
                   Login</Button>
            </AppBar>
        </HeaderBar>
    )
}

export default Header;
