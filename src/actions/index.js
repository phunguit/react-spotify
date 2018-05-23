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

export const ActionGoToHomePage = () => {
    return {
        type: Types.HOME_PAGE
    }
}

export const AcGoToAlbumPage = (breadcrumb) => {
    return {
        type: Types.ALBUM_PAGE,
        breadcrumb
    }
}