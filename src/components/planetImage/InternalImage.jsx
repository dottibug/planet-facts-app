import styles from './PlanetImage.module.scss';

export default function InternalImage({ imageSrc, imageAlt, imageSize }) {
  return (
    <img className={styles.planetImage} src={imageSrc} alt={imageAlt} style={imageSize} />
  );
}
