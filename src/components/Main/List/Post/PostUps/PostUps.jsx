import style from './PostUps.module.css';
import {Text} from '../../../../../UI/Text';
import PropTypes from 'prop-types';

export const PostUps = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Поднять рейтинг' />
    <Text As='p'
      size={12}
      tsize={16}
      color='grey'
      bold
      className={style.ups}>
      {ups}
    </Text>
    <button className={style.down} aria-label='Понизить рейтинг' />
  </div>
);


PostUps.propTypes = {
  ups: PropTypes.number,
};
