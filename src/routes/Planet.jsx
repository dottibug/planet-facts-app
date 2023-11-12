import styles from './Planet.module.scss';
import { useParams, useLoaderData } from 'react-router-dom';
import { useMediaContext } from '../context/useMediaContext';
import { MOBILE } from '../context/mediaContext';
import MobileTabs from '../components/mobile/MobileTabs';
import PlanetImage from '../components/planetImage/PlanetImage';
import PlanetFacts from '../components/planetFacts/PlanetFacts';
import PlanetStats from '../components/planetStats/PlanetStats';
import PageTransition from '../components/pageTransition/PageTransition';

// Displays information about a specific planet
// This component does not accept any props. The planet data is fetched internally using the useLoaderData hook. The type of information to display is determined by the info parameter in the URL.
export default function Planet() {
  // The type of info to display about the planet ('overview', 'internal-structure', 'surface-geology'). Defaults to 'overview'.
  const info = useParams().info || 'overview';
  const media = useMediaContext();
  const currentPlanet = useLoaderData();

  const { rotation, revolution, radius, temperature, name, images } = currentPlanet;

  const planetStats = [
    { title: 'rotation', data: rotation },
    { title: 'revolution', data: revolution },
    { title: 'radius', data: radius },
    { title: 'temperature', data: temperature },
  ];

  return (
    <PageTransition>
      <div className={styles.planet}>
        {media === MOBILE && <MobileTabs />}
        <PlanetImage name={name} images={images} info={info} />
        <PlanetFacts planet={currentPlanet} name={name} info={info} />
      </div>
      <PlanetStats planetStats={planetStats} />
    </PageTransition>
  );
}
