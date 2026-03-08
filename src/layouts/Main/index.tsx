import ErrorBoundary from 'components/ErrorBoundary';
import { Outlet } from 'react-router';
import MainLayoutFooter from './components/MainLayoutFooter';
import MainLayoutNavbar from './components/MainLayoutNavbar';

const MainLayout = () => {
    return (
        <>
            <MainLayoutNavbar />
            <div className="container mx-auto my-4 px-4">
                <ErrorBoundary>
                    <Outlet />
                </ErrorBoundary>
            </div>
            <MainLayoutFooter />
        </>
    );
};

export default MainLayout;
