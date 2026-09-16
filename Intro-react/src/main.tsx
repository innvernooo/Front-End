import {} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './App.tsx';
import ProfilePage from './pages/profile/home';
import ProductPage from './pages/profile/products';
import MaleProductPage from './pages/profile/male-product';
import FemaleProductPage from './pages/profile/female-product';
import KidsProductPage from './pages/profile/kids-product';
import UseRef from './pages/profile/useref';
import UseState from './pages/profile/usestate/index.tsx';
import ShowPassword from './pages/profile/show-password/index.tsx';
import FillBio from './pages/profile/text-area/index.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/products',
    element: <ProductPage />,
  },
  {
    path: '/for male',
    element: <MaleProductPage />,
  },
  {
    path: '/for female',
    element: <FemaleProductPage />,
  },
  {
    path: '/for kids',
    element: <KidsProductPage />,
  },
  {
    path: '/use ref',
    element: <UseRef />,
  },
  {
    path: '/use state',
    element: <UseState />,
  },
  {
    path: '/show password',
    element: <ShowPassword />,
  },
  {
    path: '/fill bio',
    element: <FillBio />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>,
);
