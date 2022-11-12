import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const useCommentsData = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [commentsData, setCommentsData] = useState([]);
  const token = useSelector(state => state.token);

  useEffect(() => {
    if (!token) return;
    setIsLoading(true);

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
        const comments = result[1].data.children
          .filter((item) => item.kind !== 'more')
          .filter((item) => item.data.author !== '[deleted]')
          .map(item => item.data);
        setCommentsData([post, comments]);
        setIsLoading(false);
        setIsError(null);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
        setIsError(err.message);
      });
  }, [token]);

  return {commentsData, isLoading, isError};
};

