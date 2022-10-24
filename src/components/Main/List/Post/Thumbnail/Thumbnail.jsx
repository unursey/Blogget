import style from './Thumbnail.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Thumbnail = ({thumbnail, title}) => {
  console.log(style);
  return (
    <img
      className={style.img}
      src={thumbnail ? thumbnail : notphoto}
      alt={title}
    />
  );
};

Thumbnail.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};
