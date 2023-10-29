import styles from './PlanetImage.module.css';
import { planetImageSizes } from '../../data/mediaSizes';

export default function PlanetImage({ name, images, info }) {
  const planetImage = () => {
    if (info === 'overview') return images.planet;
    if (info === 'internal-structure') return images.internal;
    if (info === 'surface-geology') return images.planet;
  };

  // TODO responsive planet image sizes
  const imageSize = planetImageSizes[name.toLowerCase()].desktop;

  return (
    <div className={styles.planetImageWrapper}>
      <img
        className={styles.planetImage}
        src={planetImage()}
        alt={getImageAlt(name, info)}
        style={{
          width: imageSize,
          height: imageSize,
        }}
      />
      {info === 'surface-geology' && (
        <img
          className={styles.surface}
          src={images.geology}
          alt={`Closeup of the surface of ${name}`}
        />
      )}
    </div>
  );
}

// HELPER FUNCTIONS
function getImageAlt(planetName, info) {
  const infoText = () => info.split('-').join(' ');

  return `Image of ${
    info === 'overview' ? planetName : `the ${infoText()} of ${planetName}`
  }.`;
}
