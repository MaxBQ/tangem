import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { Suspense } from 'react';

export const Routes = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(<Route element={<MainPage />} path={'/'} />),
  );
  return (
    <Suspense fallback={''}>
      <RouterProvider router={route} />
    </Suspense>
  );
};
