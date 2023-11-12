import styles from './MobileNav.module.scss';
import HomepageLink from '../../navigation/HomepageLink';
import MobileMenuToggleButton from './ui/MobileMenuToggleButton';
import MobileMenu from './MobileMenu';

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
