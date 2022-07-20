import React, {useEffect, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {URL} from '../../../api/const';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [isActiveButton, setIsActiveButton] = useState(false);

  const handleLogoutBtn = () => {
    setIsActiveButton(!isActiveButton);
  };

  const logOut = () => {
    setAuth({});
    delToken();
    handleLogoutBtn();
  };

  useEffect(() => {
    if (!token) return;
    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) localStorage.removeItem('bearer');
        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        console.log(err);
        setAuth({});
      });
  }, [token]);

  return (
    <div className={style.container}>
      {auth ? (
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
      {isActiveButton && (
        <button className={style.logout} onClick={() => logOut()}>
          Выйти
        </button>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
