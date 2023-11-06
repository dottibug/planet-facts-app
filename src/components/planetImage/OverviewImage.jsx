import styles from './PlanetImage.module.scss';
import SurfaceGeologyImage from './SurfaceGeologyImage';

export default function OverviewImage({
  info,
  prevInfo,
  images,
  name,
  imageSrc,
  imageAlt,
  imageSize,
}) {
  return (
    <>
      <img
        className={styles.planetImage}
        src={imageSrc}
        alt={imageAlt}
        style={imageSize}
      />
      <SurfaceGeologyImage info={info} images={images} name={name} prevInfo={prevInfo} />
    </>
  );
}
