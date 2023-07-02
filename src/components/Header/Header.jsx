import { useState, useEffect } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeviceInfo } from 'redux/deviceInfo/deviceThunk';
import { selectDeviceInfo } from '../../redux/deviceInfo/deviceSelector';

import { DEVICE_UID } from 'configs';

import { ReactComponent as Logo } from '../../assets/icon/logo.svg';

import style from './Header.module.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { name } = useSelector(selectDeviceInfo);

  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    setDeviceInfo(name);
  }, [id, name]);

  useEffect(() => {
    dispatch(fetchDeviceInfo(id));
  }, [dispatch, id]);

  return (
    <div className={style.headerContainer}>
      <NavLink to="/" className={style.headerLogo}>
        <Logo />
      </NavLink>
      <nav className={style.headerMenu}>
        <NavLink
          className={style.headerMenuLinkGrey}
          to={`/${DEVICE_UID}/instruction`}
        >
          ІНСТРУКЦІЯ
        </NavLink>
        <Link
          className={style.headerMenuLink}
          to="/"
        >{`Поштомат №${deviceInfo}`}</Link>
      </nav>
    </div>
  );
};
