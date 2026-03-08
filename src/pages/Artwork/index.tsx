import Spinner from 'components/Spinner';
import useGetArtwork from 'hooks/useGetArtwork';
import { useParams } from 'react-router';

const Artwork = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetArtwork(Number(id));

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            <h1>{data?.title}</h1>
        </div>
    );
};

export default Artwork;
