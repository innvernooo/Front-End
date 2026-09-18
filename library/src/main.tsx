import {} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './Pages/landing';
import BookManagement from './Pages/(admin)/book-management';
import RootLayout from './layout';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/book management',
        element: <BookManagement />
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>,
);
