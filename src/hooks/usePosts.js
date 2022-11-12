import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const token = useSelector(state => state.token);

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
