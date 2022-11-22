import style from './Mainpage.module.css';
import {Text} from '../../../UI/Text';

export const Mainpage = () => (
  <div className={style.container}>
    <Text As='h2'>Стартовая страница</Text>
    <Text As='h3'>Добро пожаловать!</Text>
    <Text As='p'>Выберите категорию</Text>
  </div>
);
