import style from './Errorpage.module.css';
import {Text} from '../../../UI/Text';

export const Errorpage = () => (
  <div className={style.container}>
    <Text As='h2' className={style.error}>
      404
    </Text>
  </div>
);
