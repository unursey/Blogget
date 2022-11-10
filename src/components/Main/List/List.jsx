import {useContext} from 'react';
import style from './List.module.css';
import {postsContext} from '../../../context/postsContext';
import Post from './Post';

export const List = () => {
  const {posts} = useContext(postsContext);

  return (
    <ul className={style.list}>
      {posts.map(({data}, index) => (
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
