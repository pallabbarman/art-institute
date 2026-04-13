import Container from 'components/Container';
import ErrorCard from 'components/ErrorCard';
import Spinner from 'components/Spinner';
import useGetArtwork from 'hooks/useGetArtwork';
import { useParams } from 'react-router';

const Artwork = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useGetArtwork(Number(id));

    if (error) {
        return <ErrorCard>{error?.message}</ErrorCard>;
    }

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Container>
            <h1>{data?.title}</h1>
        </Container>
    );
};

export default Artwork;
