import style from './List.module.css';
import {useRef, useEffect} from 'react';
import Post from './Post';
// import Preloader from '../../../UI/Preloader';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import {Outlet, useParams, useNavigate} from 'react-router-dom';
import {LIST} from '../Tabs/Tabs';

const errorPage = (page) => {
  if (LIST.find(item => item.link === page)) {
    return false;
  } else {
    return true;
  }
};

export const List = () => {
  const posts = useSelector(state => state.posts.posts);
  // const loading = useSelector(state => state.posts.loading);
  // const status = useSelector(state => state.auth.status);
  const num = useSelector(state => state.posts.num);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    errorPage(page) ? navigate('/*') :
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    if (num <= 2) {
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
        {/* {loading && (<Preloader />)} */}
        {/* {!loading && status === 'error' && 'Вы не авторизованы'} */}
        {/* {!loading && status === 'login' && */}
        {posts.map(({data}) => (
          <Post
            key={data.id}
            post={data}
          />
        ))}
        {num <= 2 ?
          <li ref={endList} className={style.end}/> : (
            <div className={style.more}>
              <button className={style.btn} onClick={() => {
                dispatch(postsRequestAsync());
              }}>Загрузить еще</button>
            </div>
          )
        }
      </ul>
      <Outlet />
    </>
  );
};
