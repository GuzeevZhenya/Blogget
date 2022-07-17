import React from 'react';
import style from './DeleteButton.module.css';
import {ReactComponent as RemoveButton} from '../img/delete.svg';

export const DeleteButton = () => (
  <button className={style.delete}>
    <RemoveButton width={24} height={24} />
  </button>
);
