import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {authLogout, authRequestAsync} from '../store/auth/authAction';
// import {useNavigate} from 'react-router-dom';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.tokenReducer.token);
  const loading = useSelector(state => state.auth.loading);
  const status = useSelector(state => state.auth.status);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(authRequestAsync());
    // navigate('/');
  }, [token]);

  const clearAuth = () => dispatch(authLogout());

  return [auth, loading, status, clearAuth];
};
