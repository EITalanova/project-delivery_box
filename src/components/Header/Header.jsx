import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/icon/logo.svg';
import { selectDeviceInfo } from 'redux/deviceInfo/deviceSelector';

import style from './Header.module.scss';
import { useState, useEffect } from 'react';
import { fetchDeviceInfo } from 'redux/deviceInfo/deviceThunk';

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
      <NavLink to="/">
        <Logo className={style.headerLogo} />
      </NavLink>
      <ul className={style.headerMenu}>
        <li className={style.headerMenuEll}>ІНСТРУКЦІЯ</li>
        <li className={style.headerMenuEll}>{`Поштомат №${deviceInfo}`}</li>
      </ul>
    </div>
  );
};
