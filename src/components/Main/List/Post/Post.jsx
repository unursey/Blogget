import style from './Post.module.css';
import Thumbnail from './Thumbnail';
import Content from './Content';
import PostUps from './PostUps';
import PostDate from './PostDate';
import PostDelete from './PostDelete';
import PropTypes from 'prop-types';

export const Post = ({postData}) => {
  const {thumbnail, title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      {/* <img className={style.img} src={notphoto} alt={title} />

      <div className={style.content}>
        <h2 className={style.title}>
          <a className={style.linkPost} href="#post">
            {title}
          </a>
        </h2>
        <a className={style.linkAuthor} href='#author'>{author}</a>
      </div>

      <div className={style.rating}>
        <button className={style.up} aria-label='Поднять рейтинг' />
        <p className={style.ups}>{ups}</p>
        <button className={style.down} aria-label='Понизить рейтинг' />
      </div>

      <time className={style.date} dateTime={date}>{formatDate(date)}</time> */}

      <Thumbnail thumbnail={thumbnail} title={title} />
      <Content author={author} title={title} />
      <PostUps ups={ups} />
      <PostDate date={date} />
      <PostDelete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
