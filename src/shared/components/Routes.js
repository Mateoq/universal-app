/**
 * Module with the Routes component.
 * @module src/shared/components/Routes
 */
// React - Router.
import React from 'react';
import { Route, Switch } from 'react-router';

// App Config.
import * as routes from '../constants/routes';

// Components.
import {
  Main,
  Home,
  About
} from '../../client/containers/';
import { NotFound } from './';

/**
 * The app Routes component.
 * It Wraps the app routes to be manage from the client and the server.
 * @returns {ReactElement} -> The react component.
 */
const Routes = () => (
  <Main>
    <Switch>
      <Route
        exact
        path={routes.HOME}
        component={Home}
      />
      <Route
        path={routes.ABOUT}
        component={About}
      />
      <Route component={NotFound} />
    </Switch>
  </Main>
);

export default Routes;
