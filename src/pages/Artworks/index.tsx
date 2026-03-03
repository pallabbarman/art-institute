import Spinner from 'components/Spinner';
import useGetArtworks from 'hooks/useGetArtworks';

const Artworks = () => {
    const { data, isLoading } = useGetArtworks();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            {data?.data?.map((artwork) => (
                <h1 key={artwork?.id}>{artwork?.title}</h1>
            ))}
        </div>
    );
};

export default Artworks;
