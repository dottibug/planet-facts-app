import styles from './Planet.module.scss';
import { useParams, useLoaderData } from 'react-router-dom';
import { useMediaContext } from '../context/useMediaContext';
import { MOBILE } from '../context/mediaContext';
import MobileTabs from '../components/mobile/MobileTabs';
import PlanetImage from '../components/planetImage/PlanetImage';
import PlanetFacts from '../components/planetFacts/PlanetFacts';
import PlanetStats from '../components/planetStats/PlanetStats';

export default function Planet() {
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
    <>
      <div className={styles.planet}>
        {media === MOBILE && <MobileTabs />}
        <PlanetImage name={name} images={images} info={info} />
        <PlanetFacts planet={currentPlanet} name={name} info={info} />
      </div>
      <PlanetStats planetStats={planetStats} />
    </>
  );
}
