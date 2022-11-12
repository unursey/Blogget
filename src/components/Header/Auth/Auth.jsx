import style from './Auth.module.css';
import {Text} from '../../../UI/Text/Text';
import {SVG} from '../../../UI/SVG/SVG';
import {useState, useContext} from 'react';
import {urlAuth} from '../../../api/auth';
import {authContext} from '../../../context/authContext';
import {deleteToken} from '../../../store';
import {useDispatch} from 'react-redux';

export const Auth = () => {
  const dispatch = useDispatch();

  const [logout, setLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  return (
    <div className={style.container}>
      {auth.name ? (
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
            }}>
            Выйти
          </button> : ''}
        </>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <SVG iconName='loginIcon' className={style.svg} />
        </Text>
      )}
    </div>
  );
};
