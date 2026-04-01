import ContentCard from 'components/ContentCard';
import Spinner from 'components/Spinner';
import useGetArtworks from 'hooks/useGetArtworks';

const Artworks = () => {
    const { data, isLoading } = useGetArtworks();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="flex flex-wrap">
            {data?.data?.map((artwork) => (
                <div key={artwork?.id} className="w-full sm:w-1/2 lg:w-1/4">
                    <ContentCard artwork={artwork} />
                </div>
            ))}
        </div>
    );
};

export default Artworks;
