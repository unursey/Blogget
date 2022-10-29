import style from './Post.module.css';
import Thumbnail from './Thumbnail';
import Content from './Content';
import PostUps from './PostUps';
import PostDate from './PostDate';
import PropTypes from 'prop-types';
import {ReactComponent as DeleteIcon} from './img/delete.svg';

export const Post = ({postData}) => {
  const {thumbnail, title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      <Thumbnail thumbnail={thumbnail} title={title} />
      <Content author={author} title={title} />
      <PostUps ups={ups} />
      <PostDate date={date} />
      <button className={style.delete}>
        <DeleteIcon />
      </button>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
