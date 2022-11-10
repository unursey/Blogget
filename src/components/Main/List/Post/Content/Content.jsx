import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';
import {useState} from 'react';
import Modal from '../../../../Modal';

export const Content = ({author, title, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text
          As='a'
          size={14}
          tsize={22}
          dsize={26}
          bold
          className={style.linkPost}
          href="#post"
          onClick={() => {
            setIsModalOpen(true);
            setIsLoading(true);
          }}>
          {title}
        </Text>
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
      {isLoading &&
        (<div className={style.overlay}>
          <h2 className={style.loading}>Загрузка ...</h2>
        </div>)}
      {isModalOpen &&
        (<Modal
          id={id}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />)}
    </div>
  );
};

Content.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};
