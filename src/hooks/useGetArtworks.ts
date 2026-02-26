import { useQuery } from '@tanstack/react-query';
import { getArtworks } from 'api/artworksApi';

const useGetArtworks = () =>
    useQuery({
        queryKey: ['artworks'],
        queryFn: () => getArtworks(),
    });

export default useGetArtworks;
