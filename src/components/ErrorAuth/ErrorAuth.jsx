import style from './ErrorAuth.module.css';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export const ErrorAuth = () => {
  console.log(style);
  return ReactDOM.createPortal(
    <div className={classNames(style.topright, style.warning, style.doshow)}>
        Ошибка авторизации
    </div>,
    document.getElementById('error-root'),
  );
};

