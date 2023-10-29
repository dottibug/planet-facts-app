import styles from './PlanetImage.module.css';

export default function PlanetImage({ planet, info }) {
  const { name, images } = planet;

  const planetImage = () => {
    if (info === 'overview') return images.planet;
    if (info === 'internal-structure') return images.internal;
    if (info === 'surface-geology') return images.planet;
  };

  return (
    <div className={styles.planetImage}>
      <img src={planetImage()} alt={getImageAlt(name, info)} />
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
