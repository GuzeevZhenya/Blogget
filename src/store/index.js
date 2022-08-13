import {combineReducers, createStore, applyMiddleware} from 'redux';
import {tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {tokenMiddleWare} from './tokenReducer';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {postsReducer} from './posts/postReducer';
import {commentsReducer} from './comments/commentsReducer';
const rootReducer = combineReducers({
  tokenReducer,
  commentReducer,
  postsReducer,
  auth: authReducer,
  commentsReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(tokenMiddleWare, thunk));
