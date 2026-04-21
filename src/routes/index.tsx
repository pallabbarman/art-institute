import type { ReactNode } from 'react';
import { pathWithId } from 'utils/routes';

export interface routeShape {
    path: string;
    icon?: ReactNode;
    title: string;
}

export class Route {
    id: symbol;
    path: string;
    icon: ReactNode;
    title: string;

    constructor({ path = '', icon = null, title = '' }) {
        this.id = Symbol(path);
        this.path = path;
        this.icon = icon;
        this.title = title;
    }

    pathWithId(id: string | number) {
        return pathWithId(this.path, id);
    }
}

const routes = {
    notFound: new Route({
        path: '/not-found',
        icon: null,
        title: 'Not found',
    }),
    home: new Route({
        path: '/',
        icon: null,
        title: 'Art Institute',
    }),
    artworks: new Route({
        path: '/artworks',
        icon: null,
        title: 'Artworks',
    }),
    artwork: new Route({
        path: '/artwork/:id',
        icon: null,
        title: 'Artwork',
    }),
};

export default routes;
