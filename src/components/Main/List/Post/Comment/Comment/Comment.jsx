import style from './Comment.module.css';
import {Text} from '../../../../../../UI/Text';
import PropTypes from 'prop-types';
import {formatDate} from '../../../../../../utils/formatDate';
import Markdown from 'markdown-to-jsx';

export const Comment = ({item}) => {
  const {author, created, body} = item;
  return (
    <li className={style.item}>
      <Text
        as='h3'
        className={style.author}
        size={18}
        tsize={22}>
        <Markdown>
          {author}
        </Markdown>
      </Text>

      <Text
        As='div'
        className={style.comment}
        size={14}
        tsize={18}>
        <Markdown>
          {body}
        </Markdown>
      </Text>

      <Text
        As='time'
        size={12}
        tsize={16}
        bold
        className={style.date}
        dateTime={created}>
        {formatDate(created)}
      </Text>
    </li>
  );
};

Comment.propTypes = {
  author: PropTypes.string,
  created: PropTypes.number,
  body: PropTypes.string,
  item: PropTypes.object,
};
