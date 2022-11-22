import style from './Auth.module.css';
import {Text} from '../../../UI/Text/Text';
import {SVG} from '../../../UI/SVG/SVG';
import {useState} from 'react';
import {urlAuth} from '../../../api/auth';
import {deleteToken} from '../../../store/tokenReducer';
import {useDispatch} from 'react-redux';
import {useAuth} from '../../../hooks/useAuth';
import Preloader from '../../../UI/Preloader';
import {ErrorAuth} from '../../ErrorAuth/ErrorAuth';
import {useNavigate} from 'react-router-dom';

export const Auth = () => {
  const dispatch = useDispatch();
  const [logout, setLogout] = useState(false);
  const [auth, loading, status, clearAuth] = useAuth();
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      {loading ? <Preloader /> : auth.name ? (
        <>
          <button
            className={style.btn}
            onClick={() => {
              logout ? setLogout(false) : setLogout(true);
            }}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
            />
            <Text>{auth.name}</Text>
          </button>
          {logout ?
          <button
            className={style.logout}
            onClick={() => {
              clearAuth();
              dispatch(deleteToken());
              navigate('/');
            }}>
            Выйти
          </button> : ''}
        </>
      ) :
      (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <SVG iconName='loginIcon' className={style.svg} />
          {status === 'error' && <ErrorAuth />}
        </Text>
      )}
    </div>
  );
};
