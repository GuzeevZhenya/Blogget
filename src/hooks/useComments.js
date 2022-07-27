import {useContext, useEffect, useState} from 'react';
import {URL} from '../api/const';
import {postsContext} from '../context/postContext';
import {useSelector} from 'react-redux';

export const useComments = (id) => {
  const [comments, setComments] = useState([]);
  const [postData, setPostData] = useState({});
  const token = useSelector(state => state.token);
  const {posts} = useContext(postsContext);

  useEffect(() => {
    if (!posts) return;
    fetch(`${URL}/comments/${id}?limit=5`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          return;
        }
        return response.json();
      })
      .then((data) => {
        setPostData(data[0].data.children[0].data);
        setComments(data[1].data.children);
      })
      .catch((err) => console.error(err));
  }, [token]);


  return [comments, postData];
};
