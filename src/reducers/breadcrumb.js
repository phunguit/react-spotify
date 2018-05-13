import * as Types from '../contants/Action-Types';

var defaultState = [
    {
        to: '',
        name: 'Home'
    }
];

const breadcrumb = (state = defaultState, action) => {
    switch(action.type) {
        case Types.ARTIST_PAGE:
            state.push(action.breadcrumb);
            return [...state];
        default:
            return state;
    }
}
export default breadcrumb;