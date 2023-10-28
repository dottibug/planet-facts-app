import styles from './PlanetStat.module.css';

export default function PlanetStat({ planetStat }) {
  return (
    <div className={styles.statBox}>
      <p className={styles.statTitle}>{planetStat.title}</p>
      <p className={styles.statData}>{planetStat.data}</p>
    </div>
  );
}
