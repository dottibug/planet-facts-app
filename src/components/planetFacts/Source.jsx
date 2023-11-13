import styles from './Source.module.scss';
import { OVERVIEW, INTERNAL_STRUCTURE, SURFACE_GEOLOGY } from '../../../data/infoSlugs';

export default function Source({ planet, info }) {
  const infoSource = () => {
    if (info === OVERVIEW) return planet.overview.source;
    if (info === INTERNAL_STRUCTURE) return planet.structure.source;
    if (info === SURFACE_GEOLOGY) return planet.geology.source;
  };

  return (
    <div className={styles.source}>
      <p className="body">{`Source:  `}</p>
      <a
        href={infoSource()}
        target="_blank"
        rel="noreferrer"
        className={`body ${styles.link}`}>
        <p>Wikipedia</p>
        <img className={styles.linkIcon} src="/icon-source.svg" alt="test" />
      </a>
    </div>
  );
}
