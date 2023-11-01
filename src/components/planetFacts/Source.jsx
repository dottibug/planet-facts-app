import styles from './Source.module.scss';
import { useMediaContext } from '../../context/useMediaContext';

export default function Source({ planet, info }) {
  const media = useMediaContext();

  const infoSource = () => {
    if (info === 'overview') return planet.overview.source;
    if (info === 'internal-structure') return planet.structure.source;
    if (info === 'surface-geology') return planet.geology.source;
  };

  return (
    <div className={styles.source}>
      <p className="body">{`Source:  `}</p>
      <a href={infoSource()} className={`body ${styles.link}`}>
        <p>Wikipedia</p>
        <img className={styles.linkIcon} src="/assets/icon-source.svg" alt="test" />
      </a>
    </div>
  );
}
