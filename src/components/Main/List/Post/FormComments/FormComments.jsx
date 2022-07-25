import style from './FormComments.module.css';
import {useState} from 'react';
import {commentContext} from '../../../../../context/commentsContext';
import {useContext} from 'react';
import {authContext} from '../../../../../context/authContext';
export const FormComment = () => {
  const [isTextArea, setIsTextArea] = useState(false);
  const {value, setValue} = useContext(commentContext);
  const {auth} = useContext(authContext);
  console.log(auth);

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
          <h2>{auth.name}</h2>
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
