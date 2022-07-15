import React from 'react';
import style from './Heading.module.css';
import PropTypes from 'prop-types';

export const Heading = ({title}) => {
  <h1 className={style.heading}>{title}</h1>;
};

Heading.propTypes = {
  title: PropTypes.string,
};
