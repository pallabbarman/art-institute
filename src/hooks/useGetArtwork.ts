import { useQuery } from '@tanstack/react-query';
import { getArtwork } from 'api/artworkApi';

const useGetArtwork = (id: number) =>
    useQuery({
        queryKey: ['artwork', id],
        queryFn: () => getArtwork(id),
    });

export default useGetArtwork;
