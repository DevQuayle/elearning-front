// @flow
import React from "react";
import {Route} from "react-router-dom";
import type {TRoute, TRoutes} from "../models/Route/Route";

const renderRoutes = (routes: TRoutes) => {
    return routes.map<React$Element<Route>>((prop: TRoute, key: number) => {
        return (
            <Route
                path={prop.layout + prop.path}
                render={props => (
                    <prop.component
                        {...props}
                    />
                )}
                key={key}
            />
        );
    });
}

export default renderRoutes;
