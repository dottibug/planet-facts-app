import styles from './Footer.module.css';
import PlanetStat from './PlanetStat';

// title
// data

export default function Footer({ planetStats }) {
  return (
    <footer className={styles.footer}>
      {planetStats.map((planetStat) => (
        <PlanetStat planetStat={planetStat} key={planetStat.title} />
      ))}
    </footer>
  );
}
