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
                    <div>{artwork?.category_titles[0]}</div> <span>{artwork?.timestamp}</span>
                </div>
                <Link to={routes.artwork.pathWithId(artwork?.id)} className="flex flex-col gap-4">
                    <h1>{artwork?.title}</h1>
                    {artwork?.short_description && (
                        <p className="text-black/80">{artwork.short_description}</p>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default ContentCard;
