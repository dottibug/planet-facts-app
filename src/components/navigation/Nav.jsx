import styles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import { useMediaContext } from '../../context/useMediaContext';
import { DESKTOP, LAPTOP, TABLET, MOBILE } from '../../context/mediaContext';
import { planetColors } from '../../../data/planetColors';
import { planetsArray } from '../../../data/planetsArray';

export default function Nav() {
  const media = useMediaContext();

  const navItemStyle = (isActive, planet) => {
    if (!isActive) return {};

    const desktopAndLaptopStyles = {
      borderTopColor: planetColors[planet],
      backgroundColor: `${planetColors[planet]}20`,
    };

    const mobileAndTabletStyles = {
      borderBottomColor: planetColors[planet],
    };

    return media === DESKTOP || media === LAPTOP
      ? desktopAndLaptopStyles
      : mobileAndTabletStyles;
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