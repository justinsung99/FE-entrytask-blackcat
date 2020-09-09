import React from 'react';
const NotFoundPage = React.lazy(() => import('containers/NotFoundPage'));
const LoginView = React.lazy(() => import('containers/LoginView'));
const ListView = React.lazy(() => import('containers/ListView'));

const routes: Record<string, any | boolean | string>[] = [
  {
    comp: ListView,
    path: '/',
  },
  {
    comp: LoginView,
    path: '/login',
  },
  {
    comp: NotFoundPage,
  },
];

export default routes;
