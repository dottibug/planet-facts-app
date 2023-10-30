import { NavLink } from 'react-router-dom';
import { useMediaContext } from '../context/useMediaContext';
import { DESKTOP, TABLET, MOBILE } from '../context/mediaContext';
import styles from './Nav.module.css';

const planets = [
  'mercury',
  'venus',
  'earth',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune',
];

const planetColors = {
  mercury: '#419EBB',
  venus: '#EDA249',
  earth: '#6D2ED5',
  mars: '#D14C32',
  jupiter: '#D83A34',
  saturn: '#CD5120',
  uranus: '#1EC1A2',
  neptune: '#2D68F0',
};

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
      <h1 className={styles.title}>The Planets</h1>
      <ul className={styles.navItems}>
        {planets.map((planet) => (
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
