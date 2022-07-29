import {useState, useEffect} from 'react';
import {URL} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../store/tokenReducer';

export const useAuth = () => {
  const [auth, setAuth] = useState({});

  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();

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
        console.error(err);
        setAuth({});
        dispatch(deleteToken());
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
