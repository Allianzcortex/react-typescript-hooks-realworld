import React,{Fragment} from "react";
import { renderRoutes } from "react-router-config";
import {Header} from '../componnets/utils'

// import route from '../routes/index'



function HomeLayout(props) {
    const {route}=props
    return (
        <Fragment>
            <Header/>
            {renderRoutes(route.routes)}

            <br/>
        </Fragment>
    )
}

export default HomeLayout
