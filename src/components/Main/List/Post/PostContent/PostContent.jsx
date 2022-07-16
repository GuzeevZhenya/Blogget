import React from 'react';
import style from './PostContent.module.css';
import PropTypes from 'prop-types';

export const PostContent = ({title, author}) => {
  console.log(title, author);
  return (
    <div className={style.content}>
      <h2 className={style.title}>
        <a className={style.linkPost}>{title}</a>
      </h2>
      <a className={style.linkAuthor}>{author}</a>
    </div>
  );
};


PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
