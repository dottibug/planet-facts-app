import styles from './MobileNav.module.scss';
import MobileMenuToggleButton from './ui/MobileMenuToggleButton';
import MobileMenu from './MobileMenu';
import HomepageLink from '../../navigation/HomepageLink';

export default function MobileNav() {
  return (
    <nav className={styles.mobileNav}>
      <div className={styles.mobileNavBar}>
        <HomepageLink />
        <MobileMenuToggleButton />
      </div>
      <MobileMenu />
    </nav>
  );
}
