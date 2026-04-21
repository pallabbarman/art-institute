import SuspenseComponent from 'components/SuspenseComponent';
import { lazy } from 'react';

const HomeBanner = SuspenseComponent(lazy(() => import('./components/HomeBanner')));
const HomeArtworks = SuspenseComponent(lazy(() => import('./components/HomeArtworks')));

const Home = () => {
    return (
        <div className="flex flex-col gap-8">
            <HomeBanner />
            <HomeArtworks />
        </div>
    );
};

export default Home;
