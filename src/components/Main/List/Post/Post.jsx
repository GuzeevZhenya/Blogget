import React from 'react';
import style from './Post.module.css';

import PropTypes from 'prop-types';

import {PostRaiting} from './PostRaiting/PostRaiting';
import {PostTime} from './PostTime/PostTime';
import {PostContent} from './PostContent/PostContent';
import {PostPhoto} from './PostPhoto/PostPhoto';
import {DeleteButton} from './DeleteButton/DeleteButton';

export const Post = ({post}) => {
  const {title, author, ups, date} = post;
  return (
    <li className={style.post}>
      <PostPhoto title={title}/>
      <PostContent title={title} author={author}/>
      <PostRaiting ups={ups}/>
      <PostTime date={date}/>
      <DeleteButton/>
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};
