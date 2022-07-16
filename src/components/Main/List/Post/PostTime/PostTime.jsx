import React from 'react';
import style from './PostTime.module.css';
import {formatDate} from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

export const PostTime = ({date}) => {
  console.log(date);
  return (
    <time className={style.date} dateTime={date}>
      {formatDate(date)}
    </time>
  );
};

PostTime.propTypes = {
  date: PropTypes.string,
};


