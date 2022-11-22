import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';
import {Link, useParams} from 'react-router-dom';

export const Content = ({author, title, id}) => {
  const {page} = useParams();

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
          <Text size={14} tsize={22} dsize={26} bold className={style.linkPost}>
            {title}
          </Text>
        </Link>
      </Text>
      <Text
        As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'>
        {author}
      </Text>
    </div>
  );
};

Content.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};
