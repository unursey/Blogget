import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {assignId} from '../../../utils/generateRandomId';
import {Text} from '../../../UI/Text/Text';
import {SVG} from '../../../UI/SVG/SVG';

import {debounceRaf} from '../../../utils/debounce';
import {useNavigate} from 'react-router-dom';

export const LIST = [
  {value: 'Главная', Icon: 'homeIcon', link: 'rising'},
  {value: 'Топ', Icon: 'topIcon', link: 'top'},
  {value: 'Лучшие', Icon: 'bestIcon', link: 'best'},
  {value: 'Горячие', Icon: 'hotIcon', link: 'hot'},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [selectTab, setSelectTab] = useState(() => LIST[0].value);
  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown &&
        <div className={style.wrapperBtn}>
          <Text As='button' className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {selectTab}
            <SVG iconName='arrowIcon' width={15} height={15}></SVG>
          </Text>
        </div>
      }

      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({value, link, id, Icon}) => (
            <li className={style.item} key={id}>
              <Text As='button'
                className={style.btn}
                onClick={() => {
                  setSelectTab(value);
                  navigate(`/category/${link}`);
                }}>
                {value}
                {Icon && <SVG iconName={Icon} width={30} height={30}></SVG>}
              </Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
