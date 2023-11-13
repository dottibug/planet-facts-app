import styles from './MobileMenu.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useMobileNavContext } from '../../../context/useMobileNavContext';
import { planetsArray } from '../../../../data/planetsArray';
import MobileMenuItem from './MobileMenuItem';
import {
  menuAnimationVariants,
  OPEN_NAV,
  CLOSE_NAV,
} from './animationVariants/menuAnimationVariants';

export default function MobileMenu() {
  const { isMobileNavOpen } = useMobileNavContext();

  return (
    <AnimatePresence mode="popLayout">
      {isMobileNavOpen && (
        <motion.ul
          key={isMobileNavOpen}
          variants={menuAnimationVariants}
          initial={{ opacity: 0 }}
          animate={OPEN_NAV}
          exit={CLOSE_NAV}
          className={styles.mobileMenu}>
          {planetsArray.map((planet) => (
            <MobileMenuItem key={planet} planet={planet} />
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
