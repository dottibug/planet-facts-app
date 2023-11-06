import styles from './NavToggleButton.module.scss';
import { motion } from 'framer-motion';
import ToggleButtonPaths from './ToggleButtonPaths';
import { useMobileNavContext } from '../../context/useMobileNavContext';

export default function NavToggleButton() {
  const { isMobileNavOpen, toggleMobileNav } = useMobileNavContext();
  return (
    <motion.div
      initial={false}
      animate={isMobileNavOpen ? 'open' : 'closed'}
      className={styles.navToggleButtonWrapper}>
      <button onClick={() => toggleMobileNav()} className={styles.navToggleButton}>
        <ToggleButtonPaths />
      </button>
    </motion.div>
  );
}
