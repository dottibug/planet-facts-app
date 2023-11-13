import styles from './PlanetOption.module.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaContext } from '../../context/useMediaContext';
import { getPlanetImageAlt } from '../planetImage/helpers/planetImageHelpers';
import { getImageHeight } from './helpers/getImageHeight';
import { OVERVIEW } from '../../../data/infoSlugs';

const hoveredBackgroundColor = `#FFFFFF35`;
const defaultBackgroundColor = `#FFFFFF10`;

export default function PlanetOption({ planet }) {
  const media = useMediaContext();
  const [hoveredOption, setHoveredOption] = useState(null);
  const planetName = planet.name;

  // HANDLERS
  const handleHoverOption = (e) => setHoveredOption(e.currentTarget.dataset.planet);
  const handleBlurOption = () => setHoveredOption(null);

  return (
    <li className={styles.planetOptionListItem}>
      <NavLink
        to={`/${planetName.toLowerCase()}`}
        onPointerEnter={handleHoverOption}
        onPointerLeave={handleBlurOption}
        className={styles.planetOption}
        data-planet={planetName}
        style={{
          backgroundColor:
            hoveredOption === planetName
              ? hoveredBackgroundColor
              : defaultBackgroundColor,
        }}>
        <div className={styles.planetImageWrapper}>
          <img
            src={planet.images.planet}
            alt={getPlanetImageAlt(planetName, OVERVIEW)}
            style={getImageHeight(media, planetName)}
          />
        </div>
        <p className={styles.planetName}>{planetName}</p>
      </NavLink>
    </li>
  );
}
