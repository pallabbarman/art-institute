import MainLayout from 'layouts/Main';
import Artworks from 'pages/Artworks';
import { createBrowserRouter } from 'react-router';
import routes from '.';

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
