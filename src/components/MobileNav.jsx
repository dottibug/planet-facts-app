import styles from './MobileNav.module.css';
import { useState } from 'react';
import { planetsArray } from '../../data/planetsArray';
import { planetColors } from '../../data/planetColors';
import { NavLink } from 'react-router-dom';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // HANDLERS
  const handleClickMenuButton = () => setIsOpen((isOpen) => !isOpen);

  const handleClickMenu = () => setIsOpen(false);

  // INLINE STYLES
  const menuButtonStyle = isOpen ? { opacity: '0.2487' } : {};

  return (
    <nav className={styles.mobileNavMenu}>
      <div className={styles.mobileNavBar}>
        <h1 className="siteTitle">The Planets</h1>
        <button
          className={styles.menuButton}
          style={menuButtonStyle}
          onClick={handleClickMenuButton}>
          <img src="/assets/icon-hamburger.svg" alt="Navigation menu icon" />
        </button>
      </div>
      {isOpen && (
        <ul className={styles.mobileNavList}>
          {planetsArray.map((planet) => (
            <li key={planet} className={styles.mobileNavListItem}>
              <NavLink
                to={`/${planet}`}
                onClick={handleClickMenu}
                className={styles.mobileNavLink}>
                <div className={styles.planet}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none">
                    <circle cx="10" cy="10" r="10" fill={planetColors[planet]} />
                  </svg>
                  <p className={styles.name}>{planet}</p>
                </div>
                <img
                  className={styles.arrow}
                  src="/assets/icon-chevron.svg"
                  alt={`Selection arrow for ${planet.at(0).toUpperCase()}${planet.slice(
                    1
                  )}`}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
