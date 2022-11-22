import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {postsRequestAsync} from '../store/posts/postsAction';

export const usePosts = () => {
  const posts = useSelector(state => state.posts.posts);
  const token = useSelector(state => state.tokenReducer.token);
  const loading = useSelector(state => state.auth.loading);
  const status = useSelector(state => state.auth.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [posts, loading, status];
};
