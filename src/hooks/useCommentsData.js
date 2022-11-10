import {useContext, useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = ({id}) => {
  const [commentsData, setCommentsData] = useState([]);
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/comments/${id}`, {
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
      .then((result) => {
        const post = result[0].data.children[0].data;
        const comments = result[1].data.children.map(item => item.data);
        setCommentsData([post, comments]);
      })
      .catch(err => {
        console.error(err);
      });
  }, [token]);

  return [commentsData];
};

