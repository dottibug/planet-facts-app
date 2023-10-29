import styles from './PlanetFacts.module.css';
import Tabs from './Tabs';

export default function PlanetFacts({ planet, info }) {
  const { name } = planet;

  const planetInfo = () => {
    if (info === 'overview') return planet.overview.content;
    if (info === 'internal-structure') return planet.structure.content;
    if (info === 'surface-geology') return planet.geology.content;
  };

  const infoSource = () => {
    if (info === 'overview') return planet.overview.source;
    if (info === 'internal-structure') return planet.structure.source;
    if (info === 'surface-geology') return planet.geology.source;
  };

  return (
    <div className={styles.planetFacts}>
      <h1 className="headingOne">{name}</h1>
      <p className={`${styles.planetInfo} body`}>{planetInfo()}</p>

      <div className={styles.source}>
        <p className="body">{`Source:  `}</p>
        <a href={infoSource()} className={`body ${styles.link}`}>
          <p>Wikipedia</p>
          <img className={styles.linkIcon} src="/assets/icon-source.svg" alt="test" />
        </a>
      </div>
      <Tabs />
    </div>
  );
}
