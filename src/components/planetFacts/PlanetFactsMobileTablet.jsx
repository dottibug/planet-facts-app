import styles from './PlanetFactsMobileTablet.module.scss';
import { useMediaContext } from '../../context/useMediaContext';
import { MOBILE } from '../../context/mediaContext';
import Source from './Source';
import Tabs from './Tabs';
import { getPlanetInfo } from './getPlanetInfo';

export default function PlanetFactsMobileTablet({ planet, info }) {
  const media = useMediaContext();
  const { name } = planet;

  return (
    <div className={styles.planetFacts}>
      <div className={styles.summary}>
        <h1 className="headingOne">{name}</h1>
        <p className={`${styles.planetInfo} body`}>{getPlanetInfo(info, planet)}</p>
        <Source planet={planet} info={info} />
      </div>
      {media !== MOBILE && <Tabs />}
    </div>
  );
}
