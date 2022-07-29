import {combineReducers, createStore} from 'redux';
import {tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';

const rootReducer = combineReducers({tokenReducer, commentReducer});

export const store = createStore(rootReducer);
