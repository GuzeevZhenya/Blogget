import React from 'react';
import style from './Heading.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';

export const Heading = ({title}) => (
  <Text As='h1' center size={22} tsize={26} className={style.heading}>
    {title}
  </Text>
);

Heading.propTypes = {
  title: PropTypes.string,
};
