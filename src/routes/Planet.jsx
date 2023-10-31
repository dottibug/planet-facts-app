import styles from './Planet.module.css';
import { useParams, useLoaderData } from 'react-router-dom';
import PlanetImage from '../components/PlanetImage';
import PlanetFacts from '../components/PlanetFacts';
import PlanetStats from '../components/PlanetStats';
import { useMediaContext } from '../context/useMediaContext';
import { MOBILE } from '../context/mediaContext';
import MobileTabs from '../components/MobileTabs';

export default function Planet() {
  const media = useMediaContext();
  const info = useParams().info || 'overview';
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
