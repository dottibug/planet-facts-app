import './base.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import MediaProvider from './context/mediaContext';
import MobileNavProvider from './context/mobileNavContext';
import { appRouter } from './appRouter/appRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MediaProvider>
      <MobileNavProvider>
        <RouterProvider router={appRouter} future={{ v7_startTransition: true }} />
      </MobileNavProvider>
    </MediaProvider>
  </React.StrictMode>
);
