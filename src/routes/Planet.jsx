import styles from './Planet.module.css';
import { useParams } from 'react-router-dom';
import { planetData } from '../../data/data';

export default function Planet() {
  const { planet } = useParams();

  // NOTE temp getting data from object, but will be fetched from supabase
  const currentPlanet = planetData.find((data) => data.name.toLowerCase() === planet);

  console.log('CURRENT PLANET: ', currentPlanet);

  const {
    name,
    images,
    overview: { content, source },
  } = currentPlanet;

  // overview image: images.planet
  // internal image: images.internal
  // geology image: images.geology

  return (
    <div className={styles.planet}>
      <img className={styles.planetImage} src={images.planet} alt="mercury" />
      <div className={styles.planetFacts}>
        <h1 className="headingOne">{name}</h1>
        <p className="body">{content}</p>
        <p className={styles.source}>
          <span className="body">{`Source:  `}</span>
          <a href={source} className={`body ${styles.link}`}>
            Wikipedia
          </a>
          <span className={styles.linkIcon}></span>
        </p>

        {/* TODO tab component */}
        <div className={styles.tabs}>
          <div className={styles.tab}>
            <p className={styles.tabNum}>01</p>
            <p className={styles.tabName}>Overview</p>
          </div>
          <div className={styles.tab}>
            <p className={styles.tabNum}>02</p>
            <p className={styles.tabName}>Internal Structure</p>
          </div>
          <div className={styles.tab}>
            <p className={styles.tabNum}>03</p>
            <p className={styles.tabName}>Surface Geology</p>
          </div>
        </div>
      </div>
    </div>
  );
}
