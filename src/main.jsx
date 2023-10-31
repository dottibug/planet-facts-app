import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import ErrorPage from './pages/ErrorPage';
import Layout from './Layout';
import Planet from './routes/Planet';
import { planetData } from '../data/data';
import MediaProvider from './context/mediaContext';

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
        loader: async ({ params: { planet } }) => {
          const currentPlanet = planetData.find(
            (data) => data.name.toLowerCase() === planet
          );
          return currentPlanet || null;
        },
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
    <MediaProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </MediaProvider>
  </React.StrictMode>
);
