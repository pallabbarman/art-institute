import Chip from 'components/Chip';
import { Link } from 'react-router';
import routes from 'routes/index';
import type { ArtworkType } from 'types/artwork';

export interface ContentCardProps {
    artwork: ArtworkType;
}

const ContentCard = ({ artwork }: ContentCardProps) => {
    return (
        <div className="hover:border-grey-200 flex flex-col gap-4 rounded-md border border-transparent">
            <Link to={routes.artwork.pathWithId(artwork?.id)}>
                <div className="h-61">
                    <img
                        src={`https://www.artic.edu/iiif/2/${artwork?.image_id}/full/843,/0/default.jpg`}
                        alt={artwork?.thumbnail?.alt_text}
                        className="h-full w-full max-w-full rounded-md object-cover"
                    />
                </div>
            </Link>
            <div className="flex flex-col gap-4 px-4 pt-2.5 pb-6">
                <div className="flex items-center justify-between">
                    <Chip>{artwork?.category_titles[0]}</Chip>{' '}
                    <span className="text-grey-800 text-sm font-semibold">
                        {artwork?.timestamp}
                    </span>
                </div>
                <Link to={routes.artwork.pathWithId(artwork?.id)} className="flex flex-col gap-4">
                    <h3>{artwork?.title}</h3>
                    {artwork?.short_description && (
                        <p
                            className="line-clamp-3 text-ellipsis text-black/80"
                            dangerouslySetInnerHTML={{ __html: artwork.short_description }}
                        />
                    )}
                </Link>
            </div>
        </div>
    );
};

export default ContentCard;
