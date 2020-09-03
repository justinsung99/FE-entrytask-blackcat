import React from 'react';
const NotFoundPage = React.lazy(() => import('containers/NotFoundPage'));

const routes: Record<string, any | boolean | string>[] = [
    {
        comp: NotFoundPage,
        protected: true,
    },
];

export default routes;
