import React from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/authRoutes/privateRoutes";
import PublicRoute from "./components/authRoutes/publicRoutes";

import Home from "./components/home";
import SignIn from "./components/signin";

import Dashboard from "./components/admin/Dashboard";
import AdminMatches from "./components/admin/matches";

const Routes = props => {
  console.log(props);

  return (
    <>
      <Layout>
        <Switch>
          <PrivateRoute
            {...props}
            exact
            component={AdminMatches}
            path='/admin_matches'
          />
          <PrivateRoute
            {...props}
            exact
            component={Dashboard}
            path='/dashboard'
          />
          <PrivateRoute
            {...props}
            exact
            component={Dashboard}
            path='/dashboard'
          />
          <PublicRoute
            {...props}
            restricted={true}
            exact
            component={SignIn}
            path='/sign_in'
          />
          <PublicRoute
            {...props}
            restricted={false}
            exact
            component={Home}
            path='/'
          />
        </Switch>
      </Layout>
    </>
  );
};

export default Routes;
