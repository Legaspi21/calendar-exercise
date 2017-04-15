import {combineReducers} from 'redux';
import PageReducer from './reducer_page';

const rootReducer = combineReducers({
    page: PageReducer,
});

export default rootReducer;