import React from 'react';
import style from './Post.module.css';

import PropTypes from 'prop-types';

import {PostRaiting} from './PostRaiting/PostRaiting';
import {PostTime} from './PostTime/PostTime';
import {PostContent} from './PostContent/PostContent';
import {PostPhoto} from './PostPhoto/PostPhoto';
import {DeleteButton} from './DeleteButton/DeleteButton';

export const Post = ({post}) => {
  const {title, author, ups, created, url, thumbnail} = post.data;
  return (
    <li className={style.post}>
      <PostPhoto title={title} thumbnail={thumbnail}/>
      <PostContent title={title} author={author} url={url}/>
      <PostRaiting ups={ups}/>
      <PostTime date={created}/>
      <DeleteButton/>
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};
