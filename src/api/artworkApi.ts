import type { ArtworkType } from 'types/artwork';
import { api } from 'utils/api';

export const getArtwork = async (id: number): Promise<ArtworkType> => {
    const response = await api.get(`/artworks/${id}`);
    return response.data?.data;
};
