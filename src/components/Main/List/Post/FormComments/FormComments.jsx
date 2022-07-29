import style from './FormComments.module.css';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux/es/exports';
import {updateComment} from '../../../../../store/commentReducer';

export const FormComment = () => {
  const [isTextArea, setIsTextArea] = useState(false);

  const dispatch = useDispatch();
  const value = useSelector(state => state.commentReducer.comment);
  console.log(value);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleClick = e => {
    setIsTextArea(true);
    setTimeout(() => {

    }, 0);
  };

  const handleChange = e => {
    dispatch(updateComment(e.target.value));
  };


  return (
    <>
      {!isTextArea ? (
          <button
            className={style.btn}
            onClick={handleClick}>
            Написать комментарий
          </button>
      ) : (
        <form className={style.form} onSubmit={handleSubmit}>
          {/* <h2>{auth.name}</h2> */}
          <textarea className={style.textarea} value={value}
            onChange={handleChange}/>
          <button type='submit'
            className={style.btn}
          >
            Отправить
          </button>
        </form>
      )}
    </>
  );
};
