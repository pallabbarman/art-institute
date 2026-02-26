import type { ArtworkType } from './artwork';
import type { PaginationResponseType } from './pagination';

export type GetArtworksResponseType = PaginationResponseType<ArtworkType>;
