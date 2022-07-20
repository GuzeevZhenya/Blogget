import React, {useEffect, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {URL} from '../../../api/const';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [isActiveButton, setIsActiveButton] = useState(true);

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

  console.log(auth.name);

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
