import styles from './MobileNavLinks.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { planetsArray } from '../../../data/planetsArray';
import MobileNavLink from './MobileNavLink';

const variants = {
  open: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
      delay: 0.2,
    },
  },
  close: {
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.2,
    },
  },
};

export default function MobileNavLinks({ isOpen, toggleOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          key={isOpen}
          variants={variants}
          initial={{ opacity: 0 }}
          animate="open"
          exit="close"
          className={styles.mobileNavList}>
          {planetsArray.map((planet) => (
            <MobileNavLink key={planet} planet={planet} toggleOpen={toggleOpen} />
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
