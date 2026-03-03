import type { GetArtworksResponseType } from 'types/artworks';
import { api } from 'utils/api';

export const getArtworks = async (): Promise<GetArtworksResponseType> => {
    const response = await api.get('/artworks');
    return response.data;
};
