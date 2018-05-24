import * as Types from '../contants/Action-Types';

var defaultState = [
    {
        to: '',
        name: 'Home'
    }
];

const breadcrumb = (state = defaultState, action) => {
    switch(action.type) {
        case Types.HOME_PAGE:
            state = [{
                    to: '',
                    name: 'Home'
                }];
            return state;
            
        case Types.ARTIST_PAGE:
            state[1] = action.breadcrumb;
            if(state[2]) {
                state.splice(2, 1);
            }
            return [...state];

        case Types.ALBUM_PAGE:
            state[2] = action.breadcrumb;
            return [...state];

        default:
            return state;
    }
}
export default breadcrumb;