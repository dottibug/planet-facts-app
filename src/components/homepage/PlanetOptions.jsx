import styles from './PlanetOptions.module.scss';
import { planetData } from '../../../data/data';
import PlanetOption from './PlanetOption';

export default function PlanetOptions() {
  return (
    <ul className={styles.planetOptions}>
      {planetData.map((planet) => (
        <PlanetOption planet={planet} key={planet.name} />
      ))}
    </ul>
  );
}
