import {useState, useEffect, useContext} from 'react';
import {tokenContext} from '../context/tokenContext';
import {URL_API} from '../api/const';

export const usePosts = () => {
  const {token} = useContext(tokenContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best?limit=22`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({data}) => {
        setPosts(data.children);
        console.log('data.children: ', data.children);
      })
      .catch(err => {
        console.error(err);
        setPosts([]);
      });
  }, [token]);


  return posts;
};
