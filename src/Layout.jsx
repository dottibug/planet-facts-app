import styles from './Layout.module.css';
import { Outlet, useParams } from 'react-router-dom';
import { planetData } from '../data/data';
import Footer from './components/Footer';

export default function Layout() {
  const { planet } = useParams();

  // NOTE temp getting data from object, but will be fetched from supabase
  const currentPlanet = planetData.find((data) => data.name.toLowerCase() === planet);

  const { rotation, revolution, radius, temperature } = currentPlanet;

  const planetStats = [
    { title: 'Rotation Time', data: rotation },
    { title: 'Revolution Time', data: revolution },
    { title: 'Radius', data: radius },
    { title: 'Average Temp.', data: temperature },
  ];

  return (
    <>
      <nav>NAV BAR HERE</nav>
      <Outlet />
      <Footer planetStats={planetStats} />
    </>
  );
}
