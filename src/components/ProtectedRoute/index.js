import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { AppConsumer } from '../../AppContext';

const ProtectedRoute = ({ component: Component,redirectTo, ...rest,  }) => (
  <AppConsumer>
    {({ authUser }) => (
      <Route
        render={props => (authUser ? <Component {...props} /> : <Redirect to={redirectTo} />)}
        {...rest}
      />
    )}
  </AppConsumer>
);

export default ProtectedRoute;
