import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';

import './index.css';
import ErrorPage from './pages/ErrorPage';
import Layout from './Layout';
import Planet from './routes/Planet';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // HOME
      {
        path: '/',
        element: <div>Homepage</div>,
      },
      // PLANET
      {
        path: '/:planet',
        element: <Planet />,
        loader: async () => 'overview',
        children: [
          // PLANET INFO TAB
          {
            path: ':info',
            element: <Planet />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </React.StrictMode>
);
