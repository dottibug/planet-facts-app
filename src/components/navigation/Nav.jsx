import styles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import { useMediaContext } from '../../context/useMediaContext';
import { DESKTOP, LAPTOP } from '../../context/mediaContext';
import { planetColors } from '../../../data/planetColors';
import { planetsArray } from '../../../data/planetsArray';
import HomepageLink from './HomepageLink';

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
      <HomepageLink />
      <ul className={styles.navItems}>
        {planetsArray.map((planet) => (
          <li className={styles.navListItem} key={planet}>
            <NavLink
              to={`/${planet}`}
              className={styles.navItem}
              style={({ isActive }) => navItemStyle(isActive, planet)}>
              {planet}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
