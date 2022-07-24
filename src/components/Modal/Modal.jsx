import React, {useRef, useEffect} from 'react';
import style from './Modal.module.css';
import {ReactComponent as Close} from './img/close.svg';
import PropTypes from 'prop-types';
import {useComments} from '../../hooks/useComments';
import {FormComment} from '../Main/List/Post/FormComments/FormComments';
import {Comments} from '../Main/List/Post/Comments/Comments';
// import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';

export const Modal = ({title, author, mardown, closeModal, id}) => {
  const [comments] = useComments(id);
  const overlayRef = useRef(null);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  const handlePress = e => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handlePress);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handlePress);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.content}>
          {/* <Markdown
            options={{
              overrides: {
                a: {
                  props: {
                    target: '_blank',
                  },
                },
              },
            }}
          >
            {mardown}
          </Markdown> */}
        </div>
        <p className={style.author}>{author}</p>
        <FormComment/>

        {comments.length ? (
          <Comments comments={comments}/>
        ) : (
          <p>Загрузка...</p>
        )}

        <button className={style.close}>
          <Close />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  mardown: PropTypes.string,
  closeModal: PropTypes.func,
};