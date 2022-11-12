import style from './PostDate.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

export const PostDate = ({date}) => (
  <time className={style.date} dateTime={date}>
    {formatDate(date)}
  </time>
);

PostDate.propTypes = {
  date: PropTypes.number,
};
