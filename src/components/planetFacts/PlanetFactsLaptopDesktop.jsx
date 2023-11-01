import styles from './PlanetFactsLaptopDesktop.module.scss';
import { useMediaContext } from '../../context/useMediaContext';
import { MOBILE } from '../../context/mediaContext';
import { getPlanetInfo } from './getPlanetInfo';
import Source from './Source';
import Tabs from './Tabs';

export default function PlanetFactsLaptopDesktop({ planet, info }) {
  const media = useMediaContext();
  const { name } = planet;

  return (
    <>
      <div className={styles.summary}>
        <h1 className="headingOne">{name}</h1>
        <p className={`${styles.planetInfo} body`}>{getPlanetInfo(info, planet)}</p>
      </div>
      <div className={styles.sourceAndTabsWrapper}>
        <Source planet={planet} info={info} />
        {media !== MOBILE && <Tabs />}
      </div>
    </>
  );
}
