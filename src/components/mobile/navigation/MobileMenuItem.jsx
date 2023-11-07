import styles from './MobileMenuItem.module.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMobileNavContext } from '../../../context/useMobileNavContext';
import BulletCircle from './ui/BulletCircle';
import ArrowIcon from './ui/ArrowIcon';
import { planetColors } from '../../../../data/planetColors';

export default function MobileMenuItem({ planet }) {
  const { toggleMobileNav } = useMobileNavContext();
  const [hoveredItem, setHoveredItem] = useState(null);

  // HANDLERS
  const handleClickMenu = () => toggleMobileNav();
  const handleHoverNavItem = (e) => setHoveredItem(e.currentTarget.dataset.planet);
  const handleBlurNavItem = () => setHoveredItem(null);

  return (
    <li
      onPointerEnter={handleHoverNavItem}
      onPointerLeave={handleBlurNavItem}
      data-planet={planet}
      className={styles.mobileMenuItem}>
      <NavLink
        to={`/${planet}`}
        onClick={handleClickMenu}
        className={styles.mobileMenuItemLink}>
        <div className={styles.planet}>
          <BulletCircle color={planetColors[planet]} />
          <p className={styles.name}>{planet}</p>
        </div>
        <ArrowIcon planet={planet} hoveredItem={hoveredItem} />
      </NavLink>
    </li>
  );
}
