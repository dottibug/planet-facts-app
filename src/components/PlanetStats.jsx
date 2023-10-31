import styles from './PlanetStats.module.css';
import PlanetStat from './PlanetStat';

export default function PlanetStats({ planetStats }) {
  return (
    <footer className={styles.footer}>
      {planetStats.map((planetStat) => (
        <PlanetStat planetStat={planetStat} key={planetStat.title} />
      ))}
    </footer>
  );
}
