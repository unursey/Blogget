import style from './Post.module.css';
import Thumbnail from './Thumbnail';
import Content from './Content';
import PostUps from './PostUps';
import PostDate from './PostDate';
import PropTypes from 'prop-types';
import {SVG} from '../../../../UI/SVG/SVG';

export const Post = ({post}) => {
  const {id, thumbnail, title, author, ups, created} = post;

  return (
    <li className={style.post}>
      <Thumbnail thumbnail={thumbnail} title={title} />
      <Content author={author} title={title} id={id} />
      <PostUps ups={ups} />
      <PostDate date={created} />
      <button className={style.delete}>
        <SVG iconName='deleteIcon'></SVG>
      </button>
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};
