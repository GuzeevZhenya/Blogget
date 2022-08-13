import React from 'react';
import style from './Post.module.css';

import PropTypes from 'prop-types';

import {PostRaiting} from './PostRaiting/PostRaiting';
import {PostTime} from './PostTime/PostTime';
import {PostContent} from './PostContent/PostContent';
import {PostPhoto} from './PostPhoto/PostPhoto';
import {DeleteButton} from './DeleteButton/DeleteButton';

export const Post = (prosp) => {
  const {
    title,
    author,
    ups,
    created,
    url,
    thumbnail,
    selfText: markdown,
    id,
  } = prosp.postData;


  return (
    <li className={style.post}>
      <PostPhoto title={title} thumbnail={thumbnail} />
      <PostContent
        title={title}
        markdown={markdown}
        author={author}
        url={url}
        id={id}
      />
      <PostRaiting ups={ups} />
      <PostTime date={created} />
      <DeleteButton />
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};
