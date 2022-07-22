import React, {useContext} from 'react';
// import {useBestPosts} from '../../../hooks/useBestPosts';
import {postsContext} from '../../../context/postContext';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const {posts} = useContext(postsContext);
  console.log(posts);
  return (
    <ul className={style.list}>
      {posts.map((post, index) => (
        <Post key={post.data.id} post={post} />
      ))}
    </ul>
  );
};
