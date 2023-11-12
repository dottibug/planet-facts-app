import styles from './MobileMenuToggleButton.module.scss';
import { motion } from 'framer-motion';
import { useMobileNavContext } from '../../../../context/useMobileNavContext';
import ToggleButtonPaths from './ToggleButtonPaths';

export default function MobileMenuToggleButton() {
  const { isMobileNavOpen, toggleMobileNav } = useMobileNavContext();
  return (
    <motion.div
      initial={false}
      animate={isMobileNavOpen ? 'open' : 'closed'}
      className={styles.toggleButtonWrapper}>
      <button onClick={() => toggleMobileNav()} className={styles.toggleButton}>
        <ToggleButtonPaths />
      </button>
    </motion.div>
  );
}
