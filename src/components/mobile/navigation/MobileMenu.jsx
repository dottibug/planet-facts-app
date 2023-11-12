import styles from './MobileMenu.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useMobileNavContext } from '../../../context/useMobileNavContext';
import { planetsArray } from '../../../../data/planetsArray';
import MobileMenuItem from './MobileMenuItem';

const menuVariants = {
  openNav: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
  closeNav: {
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.1,
    },
  },
};

export default function MobileMenu() {
  const { isMobileNavOpen } = useMobileNavContext();

  return (
    <AnimatePresence mode="popLayout">
      {isMobileNavOpen && (
        <motion.ul
          key={isMobileNavOpen}
          variants={menuVariants}
          initial={{ opacity: 0 }}
          animate="openNav"
          exit="closeNav"
          className={styles.mobileMenu}>
          {planetsArray.map((planet) => (
            <MobileMenuItem key={planet} planet={planet} />
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
