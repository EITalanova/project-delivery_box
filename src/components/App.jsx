import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const CellSize = lazy(() => import('../pages/CellSize'));
const Packed = lazy(() => import('../pages/Packed'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/cellsize" element={<CellSize />}></Route>
          <Route path="/packed" element={<Packed />}></Route>
        </Route>
      </Routes>
    </>
  );
};
