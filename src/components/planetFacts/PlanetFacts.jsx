import styles from './PlanetFacts.module.scss';
import { useMediaContext } from '../../context/useMediaContext';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from '../../context/mediaContext';
import PlanetFactsMobileTablet from './PlanetFactsMobileTablet';
import PlanetFactsLaptopDesktop from './PlanetFactsLaptopDesktop';

export default function PlanetFacts({ planet, info }) {
  const media = useMediaContext();

  return (
    <div className={styles.planetFacts}>
      {/* TABLET && MOBILE */}
      {(media === TABLET || media === MOBILE) && (
        <PlanetFactsMobileTablet planet={planet} info={info} />
      )}
      {/* LAPTOP & DESKTOP */}
      {(media === LAPTOP || media === DESKTOP) && (
        <PlanetFactsLaptopDesktop planet={planet} info={info} />
      )}
    </div>
  );
}
