import React from 'react';
import style from './PostPhoto.module.css';
import notphoto from '../img/notphoto.jpg';

import PropTypes from 'prop-types';

export const PostPhoto = ({title, img}) => {
  console.log({title, img});
  return <img className={style.img} src={notphoto} alt={title} />;
};


PostPhoto.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
};
