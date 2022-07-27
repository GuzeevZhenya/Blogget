import {createStore} from 'redux';
import {getToken, setToken} from '../api/token';

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

const initialState = {
  comment: '',
  token: getToken()
};

export const updateToken = token => ({
  type: UPDATE_TOKEN,
  token,
});

export const deleteToken = token => ({
  type: DELETE_TOKEN,
  token,
});

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };

    case UPDATE_TOKEN:
      setToken(action.token);
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKEN:
      setToken('');
      localStorage.removeItem('bearer');
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
};


export const store = createStore(rootReducer);