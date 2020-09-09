import React, { Suspense } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import routes from './routes';
import Spinner from 'components/Spinner';
import auth from 'auth';

const App: React.FC = () => {
  const ProtectedRoute = ({ component: Component, ...rest }: any) => (
    <Route
      {...rest}
      render={(props) => {
        if (auth.loggedIn()) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: '/login' }} />;
        }
      }}
    />
  );

  const pages = routes.map((route: Record<string, any>, i: number) => {
    if (route.protected) {
      return (
        <ProtectedRoute
          component={route.comp}
          exact={route.exact}
          path={route.path}
          key={`${route.comp};${route.path};${i}`}
          protected={route.protected}
        />
      );
    }
    return (
      <Route key={`${route.comp};${route.path};${i}`} component={route.comp} exact={route.exact} path={route.path} />
    );
  });

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>{pages}</Switch>
    </Suspense>
  );
};

export default withRouter(App);
