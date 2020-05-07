import React,{Fragment} from "react";
import { renderRoutes } from "react-router-config";
import {Header} from '../componnets/utils'
import Album from "../componnets/test/album";
// import route from '../routes/index'



function HomeLayout(props) {
    const {route}=props
    return (
        <Fragment>
           {/* <Header/>*/}
           {/*xxxx*/}

           {/* <br/>*/}

           <Album/>
        </Fragment>
    )
}

export default HomeLayout
