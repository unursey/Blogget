import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 77,
      date: '2022-01-21T04:22:00.000Z',
      id: '111',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 58,
      date: '2022-01-31T09:00:00.000Z',
      id: '222',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 24,
      date: '2022-02-24T09:45:00.000Z',
      id: '333',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 124,
      date: '2022-03-10T08:00:00.000Z',
      id: '444',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postData, index) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
