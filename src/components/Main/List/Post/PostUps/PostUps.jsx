import style from './PostUps.module.css';
import PropTypes from 'prop-types';

export const PostUps = ({ups}) => {
  console.log(style);
  return (
    <div className={style.rating}>
      <button className={style.up} aria-label='Поднять рейтинг' />
      <p className={style.ups}>{ups}</p>
      <button className={style.down} aria-label='Понизить рейтинг' />
    </div>
  );
};

PostUps.propTypes = {
  ups: PropTypes.number,
};
