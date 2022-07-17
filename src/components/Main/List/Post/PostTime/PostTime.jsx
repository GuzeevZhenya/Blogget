import React from 'react';
import style from './PostTime.module.css';
import {formatDate} from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const PostTime = ({date}) => (
  <Text
    As='time'
    size={12}
    tsize={16}
    bold
    className={style.date}
    dateTime={date}
  >
    {formatDate(date)}
  </Text>
);

PostTime.propTypes = {
  date: PropTypes.string,
};
