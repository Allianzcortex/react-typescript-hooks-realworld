import React,{useEffect} from "react";

import {userSerivce} from "../_services/user.service";

// name should be in Upper case
// https://stackoverflow.com/questions/56462812/react-hook-usestate-is-called-in-function-setresults-which-is-neither-a-reac
function Register(props){

    useEffect(()=>{userSerivce.register()},[])

    return(
        <div>register</div>
    )
}

export default Register
