import React, {useContext} from 'react';
import {Navigate, Redirect, Route, Routes, Switch, useLocation} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {AppContext} from "../index";
import RequireAuth from "./RequireAuth";
import {useAuthState} from "react-firebase-hooks/auth";

const AppRoutes = () => {
    const {auth} = useContext(AppContext)
    const [user] = useAuthState(auth)
    return user ?
        (
            <Switch>
                    {privateRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} component={Component}/>
                    )}
                <Redirect to='/chat'/>
            </Switch>
        )
        :
        (
            <Switch>
                    {publicRoutes.map(({path, Component, exact}) =>
                        <Route key={path} path={path} component={Component} exact={exact}/>
                    )}
                <Redirect to='/login'/>
            </Switch>
        )

};

export default AppRoutes;