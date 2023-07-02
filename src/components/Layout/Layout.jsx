import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { RotatingLines } from 'react-loader-spinner';

import { Header } from '../Header/Header';

import style from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <Header />
      <div className={style.generalContainer}>
        <Suspense fallback={<RotatingLines strokeColor="grey" />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
