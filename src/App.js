import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {CommentsContextProvider} from './context/commentsContext';

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <CommentsContextProvider>
          {' '}
          <Header />
          <Main />
        </CommentsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
