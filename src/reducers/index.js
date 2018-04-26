import { combineReducers } from 'redux';
import query from './query';

const reducers = combineReducers({
    query: query
});

export default reducers;