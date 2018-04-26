import * as Types from '../contants/Action-Types';

export const AcChangeQuery = (query) => {
    return {
        type: Types.CHANGE_QUERY,
        query
    }
}