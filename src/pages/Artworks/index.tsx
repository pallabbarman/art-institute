import ArtworksBanner from './components/ArtworksBanner';
import ArtworksList from './components/ArtworksList';

const Artworks = () => {
    return (
        <div className="flex flex-col gap-8">
            <ArtworksBanner />
            <ArtworksList />
        </div>
    );
};

export default Artworks;
