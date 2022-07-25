import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const commentContext = React.createContext({});

export const CommentsContextProvider = ({children}) => {
  const [value, setValue] = useState('');
  return (
    <commentContext.Provider value={{value, setValue}}>
      {children}
    </commentContext.Provider>
  );
};

CommentsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
