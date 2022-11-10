import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useContext, useRef, useEffect} from 'react';
import {authContext} from '../../../context/authContext';


export const FormComment = () => {
  const {auth} = useContext(authContext);
  const textareaRef = useRef(null);

  const handleSubmit = () => {
    console.log(textareaRef.current.value);
  };

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
      <textarea
        className={style.textarea}
        // onChange={handleSubmit}
        ref={textareaRef}
      >
      </textarea>
      <button className={style.btn}>
        Отправить
      </button>
    </form>
  );
};
