import * as Types from '../contants/Action-Types';

var defaultState = '';

const query = (state = defaultState, action) => {
    switch(action.type) {
        case Types.CHANGE_QUERY:
            state = action.query;
            return state;
        default:
            return state;
    }
}
export default query;