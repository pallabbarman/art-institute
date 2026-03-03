import ErrorBoundary from 'components/ErrorBoundary';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <ErrorBoundary>
            <Outlet />
        </ErrorBoundary>
    );
};

export default RootLayout;
