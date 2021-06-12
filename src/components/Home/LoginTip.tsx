import React, { Dispatch, useEffect } from "react";
import { Link } from "react-router-dom";


export const LoginTip=()=>{
    return (<div>
        Please <Link to="/login">Login</Link> 
    </div>)
}