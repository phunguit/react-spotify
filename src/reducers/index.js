import { combineReducers } from 'redux';
import query from './query';
import breadcrumb from './breadcrumb';

const reducers = combineReducers({
    query,
    breadcrumb
});

export default reducers;