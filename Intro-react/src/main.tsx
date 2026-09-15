import {} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './App.tsx';
import ProfilePage from './pages/profile/home';
import ProductPage from './pages/profile/products';
import MaleProductPage from './pages/profile/male-product';
import FemaleProductPage from './pages/profile/female-product';
import KidsProductPage from './pages/profile/kids-product';
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
]);

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>,
);
