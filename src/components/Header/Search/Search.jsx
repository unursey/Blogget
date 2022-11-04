import style from './Search.module.css';
import {SVG} from '../../../UI/SVG/SVG';


export const Search = () =>
  (
    <form className={style.form}>
      <input type="search" className={style.search} />
      <button className={style.button}>
        <SVG iconName='searchIcon' className={style.svg}></SVG>
      </button>
    </form>
  );
