import styles from './NavToggleButton.module.scss';
import { motion } from 'framer-motion';
import ToggleButtonPaths from './ToggleButtonPaths';

export default function NavToggleButton({ isOpen, toggleOpen }) {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className={styles.navToggleButtonWrapper}>
      <button onClick={() => toggleOpen()} className={styles.navToggleButton}>
        <ToggleButtonPaths />
      </button>
    </motion.div>
  );
}
