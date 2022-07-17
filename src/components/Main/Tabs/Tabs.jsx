import React, {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utils/generateRandomId';
import {Text} from '../../../UI/Text';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {debounceRaf} from '../../../utils/debounce';

const LIST = [
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Просмотренные', Icon: TopIcon},
  {value: 'Сохраненные', Icon: BestIcon},
  {value: 'Мои посты', Icon: HotIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(true);
  const [selectedTab, setSelectedTab] = useState('Главная');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          >
            {selectedTab}
            <ArrowIcon />
          </button>
        </div>
      )}
      {(isDropDownOpen || !isDropDown) && (
        <ul className={style.list} onClick={() => setIsDropDownOpen(false)}>
          {LIST.map(({value, id, Icon}) => (
            <Text
              as='li'
              size={18}
              tsize={16}
              medium
              className={style.item}
              key={id}
            >
              <button
                className={style.btn}
                onClick={() => {
                  setSelectedTab(value);
                }}
              >
                {value}
                {Icon && <Icon width={30} height={30} />}
              </button>
            </Text>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
