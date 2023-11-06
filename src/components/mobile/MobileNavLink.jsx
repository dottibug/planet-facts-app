import styles from './MobileNavLink.module.scss';
import { NavLink } from 'react-router-dom';
import BulletCircle from './BulletCircle';
import { planetColors } from '../../../data/planetColors';
import ArrowIcon from './ArrowIcon';
import { useMobileNavContext } from '../../context/useMobileNavContext';

export default function MobileNavLink({ planet }) {
  const { toggleMobileNav } = useMobileNavContext();

  // HANDLERS
  const handleClickMenu = () => toggleMobileNav();

  return (
    <li className={styles.mobileNavListItem}>
      <NavLink
        to={`/${planet}`}
        onClick={handleClickMenu}
        className={styles.mobileNavLink}>
        <div className={styles.planet}>
          <BulletCircle color={planetColors[planet]} />
          <p className={styles.name}>{planet}</p>
        </div>
      </NavLink>
      <ArrowIcon planet={planet} />
    </li>
  );
}
