import style from './Search.module.css';
import {SVG} from '../../../UI/SVG/SVG';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {searchRequest} from '../../../store/search/searchAction';


export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handlerSubmit = e => {
    e.preventDefault();
    dispatch(searchRequest({search}));
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input
        type="search"
        className={style.search}
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      <button type='submit' className={style.button}>
        <SVG iconName='searchIcon' className={style.svg}></SVG>
      </button>
    </form>
  );
};

