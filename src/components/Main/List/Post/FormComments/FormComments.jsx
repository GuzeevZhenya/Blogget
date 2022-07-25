import style from './FormComments.module.css';
import {useState} from 'react';
import {commentContext} from '../../../../../context/commentsContext';
import {useContext} from 'react';
export const FormComment = () => {
  const [isTextArea, setIsTextArea] = useState(false);
  const {value, setValue} = useContext(commentContext);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleClick = e => {
    setIsTextArea(true);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {!isTextArea ? (
        <button
          value={value}
          className={style.btn}
          onClick={handleClick}>
          Написать комментарий
        </button>
      ) : (
        <form className={style.form} onSubmit={handleSubmit}>
          <textarea className={style.textarea}
            value={value} onChange={handleChange}
          />
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
