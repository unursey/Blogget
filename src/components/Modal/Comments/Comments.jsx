import PropTypes from 'prop-types';
import style from './Comments.module.css';
import PostDate from '../../Main/List/Post/PostDate';
import {Text} from '../../../UI/Text';

export const Comments = ({comments}) => {
  if (comments) {
    return (
      <ul className={style.list}>
        {
          comments.map((comment, index) => (
            <li className={style.item} key={index}>
              <Text As='h3' className={style.author} size={18} tsize={22}>
                {comment.author}
              </Text>
              <Text As='p' className={style.comment} size={14} tsize={18}>
                {comment.body}
              </Text>
              <PostDate date={comment.created} />
            </li>
          ))
        }
      </ul>
    );
  } else {
    return (<p>Нет комментариев</p>);
  }
};

Comments.propTypes = {
  comments: PropTypes.array,
};
