import React from 'react';
const NotFoundPage = React.lazy(() => import('containers/NotFoundPage'));
const LoginView = React.lazy(() => import('containers/LoginView'));
const ListView = React.lazy(() => import('containers/ListView'));
const DetailView = React.lazy(() => import('containers/DetailView'));

const routes: Record<string, any | boolean | string>[] = [
  {
    comp: LoginView,
    path: '/login',
  },
  {
    comp: DetailView,
    path: '/details/:id',
    protected: true,
  },
  {
    comp: ListView,
    path: '/',
    protected: true,
  },
  {
    comp: NotFoundPage,
  },
];

export default routes;
