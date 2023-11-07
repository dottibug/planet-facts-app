import styles from './MobileNav.module.scss';
import MobileMenuToggleButton from './ui/MobileMenuToggleButton';
import MobileMenu from './MobileMenu';

export default function MobileNav() {
  return (
    <nav className={styles.mobileNav}>
      <div className={styles.mobileNavBar}>
        <h1 className="siteTitle">The Planets</h1>
        <MobileMenuToggleButton />
      </div>
      <MobileMenu />
    </nav>
  );
}
