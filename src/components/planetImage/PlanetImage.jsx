import styles from './PlanetImage.module.scss';
import { useParams } from 'react-router-dom';
import { useMediaContext } from '../../context/useMediaContext';
import { DESKTOP, TABLET, MOBILE, LAPTOP } from '../../context/mediaContext';
import { planetImageSizes } from '../../../data/planetImageSizes';

export default function PlanetImage({ name, images, info }) {
  const { planet } = useParams();
  const media = useMediaContext();

  const planetImage = () => {
    if (info === 'overview') return images.planet;
    if (info === 'internal-structure') return images.internal;
    if (info === 'surface-geology') return images.planet;
  };

  const imageSize = () => {
    if (media === DESKTOP)
      return {
        width: `${planetImageSizes[planet][DESKTOP.toLowerCase()]}px`,
        height: `${planetImageSizes[planet][DESKTOP.toLowerCase()]}px`,
      };

    if (media === LAPTOP)
      return {
        width: `${planetImageSizes[planet][LAPTOP.toLowerCase()]}px`,
        height: `${planetImageSizes[planet][LAPTOP.toLowerCase()]}px`,
      };

    if (media === TABLET)
      return {
        width: `${planetImageSizes[planet][TABLET.toLowerCase()]}px`,
        height: `${planetImageSizes[planet][TABLET.toLowerCase()]}px`,
      };

    if (media === MOBILE)
      return {
        width: `${planetImageSizes[planet][MOBILE.toLowerCase()]}px`,
        height: `${planetImageSizes[planet][MOBILE.toLowerCase()]}px`,
      };
  };

  return (
    <div className={styles.planetImageWrapper}>
      <img
        className={styles.planetImage}
        src={planetImage()}
        alt={getImageAlt(name, info)}
        style={imageSize()}
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
