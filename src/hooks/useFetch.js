import {useState} from 'react';
import {URL_API} from '../api/const';

export const useFetch = (state) => {
  const [auth, setAuth] = useState(state);

  const fetchAuth = (token) => {
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 401) {
          localStorage.removeItem('bearer');
        }
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.err(err);
        setAuth({});
      });
  };

  return [auth, fetchAuth];
};
