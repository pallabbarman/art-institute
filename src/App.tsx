import ErrorBoundary from 'components/ErrorBoundary';
import { RouterProvider } from 'react-router';
import router from 'routes/router';
import 'nprogress/nprogress.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
                <RouterProvider router={router} />
            </ErrorBoundary>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}

export default App;
