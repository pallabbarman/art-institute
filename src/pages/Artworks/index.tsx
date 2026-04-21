import SuspenseComponent from 'components/SuspenseComponent';
import { lazy } from 'react';

const ArtworksList = SuspenseComponent(lazy(() => import('./components/ArtworksList')));

const Artworks = () => {
    return (
        <div>
            <ArtworksList />
        </div>
    );
};

export default Artworks;
