import React, {useContext, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';


export const Auth = () => {
  const [isActiveButton, setIsActiveButton] = useState(true);
  const {delToken} = useContext(tokenContext);
  const {auth, clearAuth} = useContext(authContext);


  const handleLogoutBtn = () => {
    setIsActiveButton(!isActiveButton);
  };

  const logOut = () => {
    clearAuth();
    delToken();
    handleLogoutBtn();
  };


  return (
    <div className={style.container}>
      {auth.name ? (
          <button className={style.btn} onClick={() => handleLogoutBtn()}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={auth.name}
            />
          </button>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
      <button
        className={isActiveButton ? style.logout : ` 
        ${style.logout} ${style.logout_active}`}
        onClick={() => logOut()}
      >
        Выйти
      </button>
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
