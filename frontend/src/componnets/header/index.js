import React from "react";

import {HeaderNavBar,HeaderRightNavBar} from "./style";

// 注销：Sign Out
// 注册 Sign Up
// 登录 Sign In

const Header=(props)=>{
    return (
       <HeaderNavBar>
            {/* TODO use <Link> to replace heref*/}
            <div className="navbar-logo">
                <a href="v2ex">LaraForum</a>
            </div>
           <HeaderRightNavBar>
                <a href="Home">Home</a>
                <a href="Notes">Notes</a>
                <a href="Timeline">Timeline</a>
                <a href="Settings">Settings</a>
                <a href="Signon">Signon</a>
           </HeaderRightNavBar>
       </HeaderNavBar>
    )
}

export default Header;
