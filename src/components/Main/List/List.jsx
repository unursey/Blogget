import style from './List.module.css';
import {usePosts} from '../../../hooks/usePosts';
import Post from './Post';
import Preloader from '../../../UI/Preloader';

export const List = () => {
  const [posts, loading, status] = usePosts();


  return (
    <ul className={style.list}>
      {loading && (<Preloader />)}
      {!loading && status === 'error' && 'Вы не авторизованы'}
      {!loading && status === 'login' && posts.map(({data}, index) => (
        <Post
          key={index}
          id={data.id}
          author={data.author}
          title={data.title}
          created={data.created}
          thumbnail={data.thumbnail}
          ups={data.ups}
          markdown={data.selftext}/>
      ))}
    </ul>
  );
};
