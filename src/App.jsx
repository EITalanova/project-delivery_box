import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { DEVICE_UID } from 'configs';
import { Layout } from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const Instruction = lazy(() => import('./pages/Instruction/Instruction'));
const CellSize = lazy(() => import('./pages/CellSize/CellSize'));
const Packed = lazy(() => import('./pages/Packed/Packed'));
const Error = lazy(() => import('./pages/Error/Error'));
const Success = lazy(() => import('./pages/Success/Success'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={`/${DEVICE_UID}`} />} />
      <Route path={`/${DEVICE_UID}`} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={`/${DEVICE_UID}/instruction`} element={<Instruction />} />
        <Route path={`/${DEVICE_UID}/cellsize`} element={<CellSize />} />
        <Route path={`/${DEVICE_UID}/packed`} element={<Packed />} />
        <Route path={`/${DEVICE_UID}/success`} element={<Success />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
