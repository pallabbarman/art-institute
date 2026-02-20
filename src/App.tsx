import ErrorBoundary from 'components/ErrorBoundary';
import { RouterProvider } from 'react-router';
import router from 'routes/router';

function App() {
    return (
        <ErrorBoundary>
            <RouterProvider router={router} />
        </ErrorBoundary>
    );
}

export default App;
