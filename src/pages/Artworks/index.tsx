import SearchBar from 'components/SearchBar';
import Spinner from 'components/Spinner';
import useGetArtworks from 'hooks/useGetArtworks';
import { Link } from 'react-router';
import routes from 'routes/index';

const Artworks = () => {
    const { data, isLoading } = useGetArtworks();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            <SearchBar name="test" />
            {data?.data?.map((artwork) => (
                <Link key={artwork?.id} to={routes.artwork.pathWithId(artwork?.id)}>
                    <h1>{artwork?.title}</h1>
                </Link>
            ))}
        </div>
    );
};

export default Artworks;
