import React from "react";
const Header=(props)=>{
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <a href="v2ex">V2EX</a>
            </div>
            <div className="navbar-right-group">
                <a href="Home">Home</a>
                <a href="Notes">Notes</a>
                <a href="Timeline">Timeline</a>
                <a href="Settings">Settings</a>
                <a href="Signon">Signon</a>
            </div>
        </div>
    )
}

export default Header;
