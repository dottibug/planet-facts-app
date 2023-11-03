import styles from './ArrowIcon.module.scss';

export default function ArrowIcon({ planet }) {
  return (
    <img
      className={styles.arrow}
      src="/assets/icon-chevron.svg"
      alt={`Selection arrow for ${planet.at(0).toUpperCase()}${planet.slice(1)}`}
    />
  );
}
