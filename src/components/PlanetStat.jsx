import styles from './PlanetStat.module.css';

export default function PlanetStat({ planetStat }) {
  return (
    <div className={styles.statBox}>
      <p className={`headingFour ${styles.statTitle}`}>{planetStat.title}</p>
      <h2 className="headingTwo">{planetStat.data}</h2>
    </div>
  );
}
