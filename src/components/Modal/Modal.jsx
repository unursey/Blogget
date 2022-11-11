import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {SVG} from '../../UI/SVG/SVG';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef, useState} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';

export const Modal = ({id, closeModal}) => {
  const {
    commentsData: [post, comments],
    isLoading,
    isError,
  } = useCommentsData(id);

  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const overlayRef = useRef(null);

  const handleClick = (e) => {
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

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {isLoading &&
        (<h2 className={style.loading}>Загрузка ...</h2>)}

        {!isLoading && isError &&
        (<h2 className={style.error}>Ошибка загрузки</h2>)}

        {!isError && !isLoading && post && (
          <>
            <h2 className={style.title}>{post.title}</h2>

            <div className={style.content}>
              <Markdown
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
                {post.selftext}
              </Markdown>
            </div>

            <p className={style.author}>{post.author}</p>
            {!isVisibleForm && (
              <button
                className={style.btn}
                onClick={() => setIsVisibleForm(true)}
              >
                Написать комментарий
              </button>
            )}
            {isVisibleForm && <FormComment />}

            <Comments comments={comments} />

            <button
              className={style.close}
              onClick={() => {
                closeModal();
              }}
            >
              <SVG iconName="closeIcon" alt="Закрыть"></SVG>
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
