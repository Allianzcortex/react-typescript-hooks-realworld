import React, {FC, Fragment} from "react"
import {useSelector} from "react-redux";
import {RootState} from "../../types/interfaces";
import {LoginModal} from "../auth/LoginModal";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AdminSidebar} from "./AdminSidebar";
import {Category} from "./Category";
import {Post} from "./Post";
import {EditPost} from "./page/EditPost";

export const Dashboard: FC<{}> = () => {

    const isAuthenticated = useSelector((state: RootState) => state.auth.loggedIn)
    if (!isAuthenticated) {
        return (<LoginModal/>)
    }

    return (
        <Fragment>
            <div style={{display: "flex"}}>
                <AdminSidebar/>
                <div style={{marginLeft: "40px",minWidth:"900px"}}>
                    <Switch>
                        <Route path="/admin/category">
                            <Category/>
                        </Route>
                        <Route exact path="/admin/post">
                            <Post/>
                        </Route>
                        <Route path="/admin/post/edit">
                            <EditPost/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Fragment>
    )
}
