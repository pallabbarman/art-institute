import { createBrowserRouter } from 'react-router';
import routes from '.';
import SuspenseComponent from 'components/SuspenseComponent';
import { lazy } from 'react';
import PageLoader from 'components/PageLoader';

const MainLayout = SuspenseComponent(lazy(() => import('layouts/Main')));
const Artworks = PageLoader(lazy(() => import('pages/Artworks')));

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: routes.artworks.path,
                element: <Artworks />,
            },
        ],
    },
]);

export default router;
