import React from 'react';
import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const PostContent = ({title, author}) => (
  <div className={style.content}>
    <Text As='h2' className={style.title}>
      <Text
        As='a'
        size={18}
        tsize={24}
        href='#autor'
        className={style.linkPost}
      >
        {title}
      </Text>
    </Text>
    <Text
      As='a'
      size={12}
      tsize={14}
      color='orange'
      className={style.linkAuthor}
      href='#autor'
    >
      {author}
    </Text>
  </div>
);

PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
