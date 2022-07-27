import {useEffect, useState} from 'react';
import {URL} from '../api/const';
import {useSelector} from 'react-redux';

export const useBestPosts = () => {
  const [posts, setPosts] = useState([]);
  const token = useSelector(state => state.token);

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
