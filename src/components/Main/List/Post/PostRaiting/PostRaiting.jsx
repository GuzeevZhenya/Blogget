import React from 'react';
import style from './PostRaiting.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const PostRaiting = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Увеличить рейтинг' />
    <Text As='p' size={16} tsize={12} bold className={style.ups}>{ups}</Text>
    <button className={style.down} aria-label='Понизить рейтинг' />
  </div>
);

PostRaiting.propTypes = {
  ups: PropTypes.number,
};
