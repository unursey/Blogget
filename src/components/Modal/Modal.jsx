import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {SVG} from '../../UI/SVG/SVG';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef, useState} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';

export const Modal = ({id, closeModal, isLoading, setIsLoading}) => {
  const [commentsData] = useCommentsData({id});
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const overlayRef = useRef(null);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current || e.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  }, []);

  if (commentsData.length > 0) {
    setIsLoading(false);
    return ReactDOM.createPortal(
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          <h2 className={style.title}>{commentsData[0].title}</h2>

          <div className={style.content}>
            <Markdown options={{
              overrides: {
                a: {
                  props: {
                    target: '_blank',
                  },
                },
              },
            }}>
              {commentsData[0].selftext}
            </Markdown>
          </div>

          <p className={style.author}>{commentsData[0].author}</p>
          {!isVisibleForm &&
            <button className={style.btn}
              onClick={() => setIsVisibleForm(true)}>
              Написать комментарий
            </button>}
          {isVisibleForm && <FormComment />}

          <Comments comments={commentsData[1]} />

          <button
            className={style.close}
            onClick={() => {
              closeModal();
            }}
          >
            <SVG
              iconName='closeIcon'
              alt='Логотип Blogget'>
            </SVG>
          </button>
        </div>
      </div>,
      document.getElementById('modal-root'),
    );
  }
};

Modal.propTypes = {
  id: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
  isLoading: PropTypes.bool,
  setIsLoading: PropTypes.func,
};
