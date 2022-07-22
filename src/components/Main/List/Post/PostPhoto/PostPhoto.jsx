import React from 'react';
import style from './PostPhoto.module.css';
import notphoto from '../img/notphoto.jpg';

import PropTypes from 'prop-types';

export const PostPhoto = ({title, thumbnail}) => {
  console.log();
  return (
    <img
      className={style.img}
      src={!/(jpg)/g.test(thumbnail) ? notphoto : thumbnail}
      alt={title}
    />
  );
};

PostPhoto.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
