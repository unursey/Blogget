import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text/Text';
import {SVG} from '../../../UI/SVG/SVG';
import {useEffect, useState} from 'react';
import {urlAuth} from '../../../api/auth';
import {useFetch} from '../../../hooks/useFetch';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useFetch(token);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!token) return;
    setAuth(token);
  }, [token]);

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
              setLogout(false);
              setAuth({});
              delToken();
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

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
