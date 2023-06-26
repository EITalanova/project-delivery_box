import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { DEVICE_UID } from 'api';
import { Layout } from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Instruction = lazy(() => import('./pages/Instruction'));
const CellSize = lazy(() => import('./pages/CellSize'));
const Packed = lazy(() => import('./pages/Packed'));
const Error = lazy(() => import('./pages/Error'));
const Success = lazy(() => import('./pages/Success'));


export const App = () => {
  return (
    <>
      <Routes>
         <Route
            path="/"
            element={<Navigate replace to={`/${DEVICE_UID}`} />}
          />
        <Route path={`/${DEVICE_UID}`} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={`/${DEVICE_UID}/instruction`} element={<Instruction />} />
          <Route path={`/${DEVICE_UID}/cellsize`} element={<CellSize />} />
          <Route path={`/${DEVICE_UID}/packed`} element={<Packed />} />
          <Route path={`/${DEVICE_UID}/success`} element={<Success />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};
