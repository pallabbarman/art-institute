import Container from 'components/Container';
import ContentCard from 'components/ContentCard';
import ErrorCard from 'components/ErrorCard';
import Spinner from 'components/Spinner';
import useGetArtworks from 'hooks/useGetArtworks';

const ArtworksList = () => {
    const { data, isLoading, error } = useGetArtworks();

    if (error) {
        return <ErrorCard>{error?.message}</ErrorCard>;
    }

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Container>
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
        </Container>
    );
};

export default ArtworksList;
