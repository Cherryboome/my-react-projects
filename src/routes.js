import React from "react";
import Layout from "./Hoc/Layout";
import { Switch } from "react-router-dom";

import PrivateRoute from "./components/authRoutes/privateRoutes";
import PublicRoute from "./components/authRoutes/publicRoutes";

import Home from "./components/home";
import SignIn from "./components/signin";
import TheTeam from "./components/team";
import TheMatches from "./components/matches";
import NotFound from "./components/ui/not_found";

import Dashboard from "./components/admin/Dashboard";
import AdminMatches from "./components/admin/matches";
import EditMatch from "./components/admin/matches/editMatch";
import AdminPlayers from "./components/admin/players";
import EditPlayers from "./components/admin/players/editPlayers";

const Routes = props => {
  // console.log(props);

  return (
    <>
      <Layout>
        <Switch>
          <PrivateRoute
            {...props}
            exact
            component={EditPlayers}
            path='/admin_players/edit_player'
          />
          <PrivateRoute
            {...props}
            exact
            component={EditPlayers}
            path='/admin_players/edit_player/:id'
          />
          <PrivateRoute
            {...props}
            exact
            component={AdminPlayers}
            path='/admin_players'
          />
          <PrivateRoute
            {...props}
            exact
            component={EditMatch}
            path='/admin_matches/edit_match'
          />
          <PrivateRoute
            {...props}
            exact
            component={EditMatch}
            path='/admin_matches/edit_match/:id'
          />
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
            component={TheMatches}
            path='/the_matches'
          />
          <PublicRoute
            {...props}
            restricted={false}
            exact
            component={TheTeam}
            path='/the_team'
          />
          <PublicRoute
            {...props}
            restricted={false}
            exact
            component={Home}
            path='/'
          />
          <PublicRoute {...props} restricted={false} component={NotFound} />
        </Switch>
      </Layout>
    </>
  );
};

export default Routes;
