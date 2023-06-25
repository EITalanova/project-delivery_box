import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

import { RotatingLines } from 'react-loader-spinner';

import { Header } from '../Header/Header';

import style from './Layout.module.scss';

export const Layout = () => {
  // const { device_uid } = useParams();
  return (
    <>
      <Header />
      <div className={style.generalСontainer}>
        <Suspense fallback={<RotatingLines strokeColor="grey" />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
