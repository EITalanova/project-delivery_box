import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icon/logo.svg';

import style from './Header.module.scss';

export const Header = () => {
  return (
    <div className={style.headerContainer}>
      <NavLink to="/">
        <Logo className={style.headerLogo} />
      </NavLink>
      <ul className={style.headerMenu}>
        <li className={style.headerMenuEll}>ІНСТРУКЦІЯ</li>
        <li className={style.headerMenuEll}>Поштомат №1234</li>
      </ul>
    </div>
  );
};
