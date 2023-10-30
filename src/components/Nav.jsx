import { NavLink } from 'react-router-dom';
import { useMediaContext } from '../context/useMediaContext';
import { DESKTOP, TABLET, MOBILE } from '../context/mediaContext';
import styles from './Nav.module.css';
import { planetColors } from '../../data/planetColors';
import { planetsArray } from '../../data/planetsArray';

export default function Nav() {
  const media = useMediaContext();

  // TODO the nav menu that is rendered depends on the media size

  const navItemStyle = (isActive, planet) => {
    if (!isActive) return {};

    const desktopStyles = {
      borderTopColor: planetColors[planet],
      backgroundColor: `${planetColors[planet]}20`,
    };

    const mobileAndTabletStyles = {
      borderBottomColor: planetColors[planet],
    };

    return media === DESKTOP ? desktopStyles : mobileAndTabletStyles;
  };

  return (
    <nav className={styles.navBar}>
      <h1 className="siteTitle">The Planets</h1>
      <ul className={styles.navItems}>
        {planetsArray.map((planet) => (
          <NavLink
            to={`/${planet}`}
            className={styles.navItem}
            style={({ isActive }) => navItemStyle(isActive, planet)}
            key={planet}>
            {planet}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
