import ContentCard from 'components/ContentCard';
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
                <div key={artwork?.id}>
                    <ContentCard artwork={artwork} />
                </div>
            ))}
        </div>
    );
};

export default Artworks;
