import ErrorBoundary from 'components/ErrorBoundary';
import { Outlet } from 'react-router';
import MainLayoutFooter from './components/MainLayoutFooter';
import MainLayoutNavbar from './components/MainLayoutNavbar';

const MainLayout = () => {
    return (
        <>
            <MainLayoutNavbar />
            <ErrorBoundary>
                <Outlet />
            </ErrorBoundary>
            <MainLayoutFooter />
        </>
    );
};

export default MainLayout;
