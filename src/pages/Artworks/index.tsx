import ContentCard from 'components/ContentCard';
import Spinner from 'components/Spinner';
import useGetArtworks from 'hooks/useGetArtworks';

const Artworks = () => {
    const { data, isLoading } = useGetArtworks();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="grid grid-cols-12 gap-4">
            {data?.data?.map((artwork) => (
                <div
                    key={artwork?.id}
                    className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
                >
                    <ContentCard artwork={artwork} />
                </div>
            ))}
        </div>
    );
};

export default Artworks;
