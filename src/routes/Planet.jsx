import styles from './Planet.module.css';
import { useParams } from 'react-router-dom';
import { planetData } from '../../data/data';
import PlanetImage from '../components/PlanetImage';
import PlanetFacts from '../components/PlanetFacts';

export default function Planet() {
  const { planet, info } = useParams();

  const currentPlanet = planetData.find((data) => data.name.toLowerCase() === planet);

  return (
    <div className={styles.planet}>
      <PlanetImage planet={currentPlanet} info={info || 'overview'} />
      <PlanetFacts planet={currentPlanet} info={info || 'overview'} />
    </div>
  );
}
