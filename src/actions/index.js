import * as Types from '../contants/Action-Types';

export const AcChangeQuery = (query) => {
    return {
        type: Types.CHANGE_QUERY,
        query
    }
}

export const AcGoToArtistPage = (breadcrumb) => {
    return {
        type: Types.ARTIST_PAGE,
        breadcrumb
    }
}