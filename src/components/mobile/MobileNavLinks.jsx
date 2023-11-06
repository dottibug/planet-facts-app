import styles from './MobileNavLinks.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { planetsArray } from '../../../data/planetsArray';
import MobileNavLink from './MobileNavLink';
import { useMobileNavContext } from '../../context/useMobileNavContext';

const mobileNavVariants = {
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

export default function MobileNavLinks() {
  const { isMobileNavOpen } = useMobileNavContext();

  return (
    <AnimatePresence mode="popLayout">
      {isMobileNavOpen && (
        <motion.ul
          key={isMobileNavOpen}
          variants={mobileNavVariants}
          initial={{ opacity: 0 }}
          animate="openNav"
          exit="closeNav"
          className={styles.mobileNavList}>
          {planetsArray.map((planet) => (
            <MobileNavLink key={planet} planet={planet} />
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
