import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup"
import NewNote from "./notes/NewNote"
import Notes from "./notes/Notes"
import AppliedRoute from "./components/AppliedRoute";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes({ appProps }) {
    return (
        <Switch>
        <AppliedRoute path="/" exact component={Home} appProps={appProps} />

            {/*<AppliedRoute path="/login" exact component={Login} appProps={appProps} />*/}
            {/*<AppliedRoute path="/signup" exact component={Signup} appProps={appProps} />*/}
            {/*<AppliedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />*/}
            {/*<AppliedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />*/}
            {/*<AppliedRoute path="/settings" exact component={Settings} appProps={appProps} />*/}

            <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
            <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
            <AuthenticatedRoute path="/settings" exact component={Settings} appProps={appProps} />
            <AuthenticatedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
            <AuthenticatedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />

        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
        </Switch>
    );
}