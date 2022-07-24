import {useContext, useEffect, useState} from 'react';
import {URL} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useBestPosts = () => {
  const [posts, setPosts] = useState([]);
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => setPosts(data.data.children));
  }, [token]);
  return [posts];
};
