import styles from './MobileNav.module.scss';
import NavToggleButton from './NavToggleButton';
import MobileNavLinks from './MobileNavLinks';

export default function MobileNav() {
  return (
    <nav className={styles.mobileNavMenu}>
      <div className={styles.mobileNavBar}>
        <h1 className="siteTitle">The Planets</h1>
        <NavToggleButton />
      </div>
      <MobileNavLinks />
    </nav>
  );
}
