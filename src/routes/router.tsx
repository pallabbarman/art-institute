import PageLoader from 'components/PageLoader';
import SuspenseComponent from 'components/SuspenseComponent';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import routes from '.';

const RootLayout = SuspenseComponent(lazy(() => import('layouts/Root')));
const MainLayout = SuspenseComponent(lazy(() => import('layouts/Main')));

const Artworks = PageLoader(lazy(() => import('pages/Artworks')));

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        path: routes.artworks.path,
                        element: <Artworks />,
                    },
                ],
            },
        ],
    },
]);

export default router;
