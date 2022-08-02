import {combineReducers, createStore, applyMiddleware} from 'redux';
import {tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';

const rootReducer = combineReducers({tokenReducer, commentReducer});

const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const store = createStore(rootReducer, applyMiddleware(logger));
