import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Instruction = lazy(() => import('./pages/Instruction'));
const CellSize = lazy(() => import('./pages/CellSize'));
const Packed = lazy(() => import('./pages/Packed'));
const Error = lazy(() => import('./pages/Error'));
const Success = lazy(() => import('./pages/Success'));

const device_uid = '4670a76-6022-4df5-ac1d-68f88589c904';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/:device_uid" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="instruction" element={<Instruction />} />
          <Route path="cellsize" element={<CellSize />} />
          <Route path="packed" element={<Packed />} />
          <Route path="success" element={<Success />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};
