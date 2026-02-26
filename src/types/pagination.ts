export interface PaginationType {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string | null;
}

export interface PaginationInfoType {
    license_text: string;
    license_links: string[];
    version: string;
}

export interface PaginationConfigType {
    iiif_url: string;
    website_url: string;
}

export interface PaginationResponseType<T> {
    data: T[];
    pagination: PaginationType;
    info: PaginationInfoType;
    config: PaginationConfigType;
}
