import style from './List.module.css';
import {useRef, useEffect} from 'react';
import Post from './Post';
import Preloader from '../../../UI/Preloader';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import {Outlet, useParams, useNavigate} from 'react-router-dom';
import {LIST} from '../Tabs/Tabs';
import {postsSlice} from '../../../store/posts/postsSlice';

const errorPage = (page) => {
  if (LIST.find(item => item.link === page)) {
    return false;
  } else {
    return true;
  }
};

export const List = () => {
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const status = useSelector(state => state.auth.status);
  const num = useSelector(state => state.posts.num);
  const isLast = useSelector(state => state.posts.isLast);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    errorPage(page) ? navigate('*') :
    dispatch(postsSlice.actions.changePage(page));
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    if (num < 3) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dispatch(postsRequestAsync());
        }
      }, {
        rootMargin: '100px',
      });

      observer.observe(endList.current);
      return () => {
        if (endList.current) {
          observer.unobserve(endList.current);
        }
      };
    }
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {status !== 'login' && <>Вы не авторизованы</>}
        {status === 'login' &&
        posts.map(({data}) => (
          <Post
            key={data.id}
            post={data}
          />
        ))}
        {loading && status === 'login' &&
          <div className={style.more}><Preloader /></div>}
        {num <= 2 ?
          <li ref={endList} className={style.end}/> : !isLast ? (
            <div className={style.more}>
              <button className={style.btn} onClick={() => {
                dispatch(postsRequestAsync());
              }}>Загрузить еще</button>
            </div>
        ) : '' }

      </ul>
      <Outlet />
    </>
  );
};
