import ErrorBoundary from 'components/ErrorBoundary';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className="container mx-auto px-4">
            <ErrorBoundary>
                <Outlet />
            </ErrorBoundary>
        </div>
    );
};

export default MainLayout;
