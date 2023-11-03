import styles from './MobileNav.module.scss';
import NavToggleButton from './NavToggleButton';
import MobileNavLinks from './MobileNavLinks';
import { AnimatePresence } from 'framer-motion';

export default function MobileNav({ isOpen, toggleOpen }) {
  return (
    <nav className={styles.mobileNavMenu}>
      <div className={styles.mobileNavBar}>
        <h1 className="siteTitle">The Planets</h1>
        <NavToggleButton isOpen={isOpen} toggleOpen={toggleOpen} />
      </div>
      {/* <AnimatePresence> */}
      <MobileNavLinks isOpen={isOpen} toggleOpen={toggleOpen} />
      {/* </AnimatePresence> */}
    </nav>
  );
}
