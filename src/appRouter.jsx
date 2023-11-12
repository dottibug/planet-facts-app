import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import ErrorPage from './pages/ErrorPage';
import Homepage from './routes/Homepage';
import Planet from './routes/Planet';
import { planetData } from '../data/data';

// Load data for a specific planet.
// Throws an Error if the specified planet is not found
// An Error will redirect user to the ErrorPage
async function loadPlanetData({ params: { planet } }) {
  const currentPlanet = planetData.find((data) => data.name.toLowerCase() === planet);
  if (!currentPlanet) throw new Error('Planet not found');
  return currentPlanet;
}

// Router configuration
// Includes routes for homepage, individual planet pages, and planet info tabs
// Planet route includes a loader function to fetch the data for the current planet
export const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/:planet',
        element: <Planet />,
        loader: loadPlanetData,
        children: [
          {
            path: ':info',
            element: <Planet />,
          },
        ],
      },
    ],
  },
]);
