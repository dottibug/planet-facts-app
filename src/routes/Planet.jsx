import styles from './Planet.module.css';
import { useParams, useLoaderData } from 'react-router-dom';
import { planetData } from '../../data/data';
import PlanetImage from '../components/PlanetImage';
import PlanetFacts from '../components/PlanetFacts';
import Footer from '../components/Footer';

export default function Planet() {
  const { planet, info } = useParams();
  const params = useParams();

  console.log('params: ', params);

  const currentPlanet = planetData.find((data) => data.name.toLowerCase() === planet);

  const planetStats = [
    { title: 'rotation', data: currentPlanet.rotation },
    { title: 'revolution', data: currentPlanet.revolution },
    { title: 'radius', data: currentPlanet.radius },
    { title: 'temperature', data: currentPlanet.temperature },
  ];

  return (
    <>
      <div className={styles.planet}>
        <PlanetImage planet={currentPlanet} info={info || 'overview'} />
        <PlanetFacts planet={currentPlanet} info={info || 'overview'} />
      </div>
      <Footer planetStats={planetStats} />
    </>
  );
}
