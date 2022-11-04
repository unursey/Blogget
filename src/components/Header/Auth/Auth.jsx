import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {SVG} from '../../../UI/SVG/SVG';

export const Auth = ({auth}) =>
  (
    <button className={style.button}>
      {auth ?
      auth : <SVG iconName='loginIcon' className={style.svg} />}
    </button>
  );

Auth.propTypes = {
  auth: PropTypes.bool,
};
