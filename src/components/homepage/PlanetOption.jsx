import styles from './PlanetOption.module.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaContext } from '../../context/useMediaContext';
import { MOBILE, TABLET } from '../../context/mediaContext';
import { getPlanetImageAlt } from '../planetImage/helpers/planetImageHelpers';

export default function PlanetOption({ planet }) {
  const media = useMediaContext();
  const [hoveredOption, setHoveredOption] = useState(null);

  // HANDLERS
  const handleHoverOption = (e) => setHoveredOption(e.currentTarget.dataset.planetName);

  const handleBlurOption = () => setHoveredOption(null);

  const imageSize = () => {
    if (media === MOBILE)
      return { height: planet.name.toLowerCase() === 'saturn' ? '82px' : '64px' };

    if (media === TABLET)
      return { height: planet.name.toLowerCase() === 'saturn' ? '148px' : '124px' };
  };

  return (
    <li className={styles.planetOptionListItem}>
      <NavLink
        to={`/${planet.name.toLowerCase()}`}
        onPointerEnter={handleHoverOption}
        onPointerLeave={handleBlurOption}
        className={styles.planetOption}
        data-planet-name={planet.name}
        style={{
          backgroundColor: hoveredOption === planet.name ? `#FFFFFF35` : `#FFFFFF10`,
        }}>
        <div className={styles.planetImageWrapper}>
          <img
            src={planet.images.planet}
            alt={getPlanetImageAlt(planet.name, 'overview')}
            style={imageSize()}
          />
        </div>
        <p className={styles.planetName}>{planet.name}</p>
      </NavLink>
    </li>
  );
}
