import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
import {AuthContextProvider} from './context/authContext';

import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';
import {PostsContextProvider} from './context/postContext';

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <AuthContextProvider>
      <PostsContextProvider>
        <Header />
        <Main />
      </PostsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
