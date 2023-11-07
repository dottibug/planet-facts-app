import styles from './OutletWrapper.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useMobileNavContext } from '../context/useMobileNavContext';

const outletVariants = {
  showOutlet: { opacity: 1, transition: { ease: 'easeOut', delay: 0.1, duration: 0.2 } },
  hideOutlet: { opacity: 0, transition: { ease: 'easeOut', duration: 0.2 } },
};

export default function OutletWrapper({ children }) {
  const { isMobileNavOpen } = useMobileNavContext();

  return (
    <AnimatePresence>
      <motion.div
        key={isMobileNavOpen}
        initial={{ opacity: 0 }}
        variants={outletVariants}
        animate="showOutlet"
        exit="hideOutlet"
        className={styles.outlet}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}