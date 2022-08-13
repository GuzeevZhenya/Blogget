import React, {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {Preloader} from './AuthLoader/AuthLoader';

import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';


export const Auth = () => {
  const [isActiveButton, setIsActiveButton] = useState(true);
  const [auth, loading, clearAuth] = useAuth();


  const dispatch = useDispatch();

  const handleLogoutBtn = () => {
    setIsActiveButton(!isActiveButton);
  };

  const logOut = () => {
    clearAuth();
    dispatch(deleteToken());
    handleLogoutBtn();
  };


  return (
    <div className={style.container}>
      {loading ? (
      <Preloader color='#cc6633' size='30px' />
      ) : auth.name ? (
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
