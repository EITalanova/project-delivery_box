import { useState, useEffect } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeviceInfo } from 'redux/deviceInfo/deviceThunk';
import { selectDeviceInfo } from 'redux/deviceInfo/deviceSelector';

import { ReactComponent as Logo } from '../../assets/icon/logo.svg';

import style from './Header.module.scss';

export const Header = () => {
  const { device_uid } = useParams();
  const dispatch = useDispatch();

  const [id, setId] = useState(device_uid);
  const [deviceInfo, setDeviceInfo] = useState(null);

  const { name } = useSelector(selectDeviceInfo);

  useEffect(() => {
    setDeviceInfo(name);
    setId(device_uid);
  }, [device_uid, name]);

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
              activeClassName={style.active}
              className={style.headerMenuLinkGrey}
              to={'instruction'}
            >
              ІНСТРУКЦІЯ
            </NavLink>
          </li>
          <li>
            <Link
              className={style.headerMenuLink}
              to={'/:device_uid'}
            >{`Поштомат №${deviceInfo}`}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
