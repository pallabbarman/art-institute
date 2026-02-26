import axios from 'axios';
import type { GetArtworksResponseType } from 'types/artworks';

export const getArtworks = async (): Promise<GetArtworksResponseType> => {
    const response = await axios.get('https://api.artic.edu/api/v1/artworks');
    return response.data;
};
