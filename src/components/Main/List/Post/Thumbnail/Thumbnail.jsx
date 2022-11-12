import style from './Thumbnail.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import {useState} from 'react';

export const Thumbnail = ({thumbnail, title}) => (
  <Image
    className={style.img}
    src={thumbnail ? thumbnail : notphoto}
    alt={title}
  />
);

// eslint-disable-next-line react/prop-types
const Image = ({alt, src, ...rest}) => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
    setIsError(false);
  };

  const handleError = () => {
    setLoading(false);
    setIsError(true);
  };

  return (
    <>
      {isError && !isLoading &&
        <img className={style.img} src={notphoto} alt='фото нет' />}
      {!isError && isLoading &&
        <img className={style.img} src={notphoto} alt='фото нет' />}
      <img
        style={{
          display: isError || isLoading ? 'none' : 'initial'
        }}
        src={src || notphoto}
        alt={alt || 'Нет фото'}
        onLoad={handleLoad}
        onError={handleError}
        {...rest}
      />
    </>
  );
};

Thumbnail.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};
