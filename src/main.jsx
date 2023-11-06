import './base.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MediaProvider from './context/mediaContext';
import Layout from './layout/Layout';
import ErrorPage from './pages/ErrorPage';
import Planet from './routes/Planet';
import { planetData } from '../data/data';
import MobileNavProvider from './context/mobileNavContext';
import Homepage from './routes/Homepage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // HOME
      {
        path: '/',
        element: <Homepage />,
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
      <MobileNavProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </MobileNavProvider>
    </MediaProvider>
  </React.StrictMode>
);
