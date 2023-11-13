import styles from './OutletWrapper.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useMobileNavContext } from '../context/useMobileNavContext';
import {
  outletWrapperVariants,
  INITIAL,
  SHOW_OUTLET,
  HIDE_OUTLET,
} from './animationVariants/outletWrapperAnimationVariants';

// Wrapper for React Router Outlet components
// Sets different padding laptop and desktop breakpoints
export default function OutletWrapper({ children }) {
  const { isMobileNavOpen } = useMobileNavContext();

  return (
    <AnimatePresence>
      <motion.div
        key={isMobileNavOpen}
        variants={outletWrapperVariants}
        initial={INITIAL}
        animate={SHOW_OUTLET}
        exit={HIDE_OUTLET}
        className={styles.outlet}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
