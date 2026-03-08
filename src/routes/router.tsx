import PageLoader from 'components/PageLoader';
import SuspenseComponent from 'components/SuspenseComponent';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import routes from '.';

const RootLayout = SuspenseComponent(lazy(() => import('layouts/Root')));
const MainLayout = SuspenseComponent(lazy(() => import('layouts/Main')));

const Artworks = PageLoader(lazy(() => import('pages/Artworks')));
const Artwork = PageLoader(lazy(() => import('pages/Artwork')));

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
                    {
                        path: routes.artwork.path,
                        element: <Artwork />,
                    },
                ],
            },
        ],
    },
]);

export default router;
