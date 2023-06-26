import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeviceInfo } from 'redux/deviceInfo/deviceThunk';
import { selectDeviceInfo } from '../../redux/deviceInfo/deviceSelector';

import { DEVICE_UID } from 'api';

import { ReactComponent as Logo } from '../../assets/icon/logo.svg';

import style from './Header.module.scss';

export const Header = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState(DEVICE_UID);
  const [deviceInfo, setDeviceInfo] = useState(null);

  const { name } = useSelector(selectDeviceInfo);

  useEffect(() => {
    setDeviceInfo(name);
    setId(DEVICE_UID);
  }, [DEVICE_UID, name]);

  useEffect(() => {
    dispatch(fetchDeviceInfo(id));
  }, [dispatch, id]);

  return (
    <div className={style.headerContainer}>
      <NavLink to="/" className={style.headerLogo}>
        <Logo />
      </NavLink>
      <nav>
        <ul className={style.headerMenu}>
          <li>
            <NavLink
              className={style.headerMenuLinkGrey}
              to={`/${DEVICE_UID}/instruction`}
            >
              ІНСТРУКЦІЯ
            </NavLink>
          </li>
          <li>
            <Link
              className={style.headerMenuLink}
              to="/"
            >{`Поштомат №${deviceInfo}`}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
