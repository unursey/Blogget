import {useEffect} from 'react';
import {commentsRequestAsync} from '../store/comments/commentsAction';
import {useSelector, useDispatch} from 'react-redux';

export const useCommentsData = (id) => {
  const commentsData = useSelector(state => state.comments.commentsData);
  const status = useSelector(state => state.comments.status);
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [token]);

  return {commentsData, status};
};

