import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { useMediaContext } from '../context/useMediaContext';
import { MOBILE } from '../context/mediaContext';
import Nav from '../components/navigation/Nav';
import MobileNav from '../components/mobile/MobileNav';
import { AnimatePresence, useCycle, motion } from 'framer-motion';

export default function Layout() {
  const media = useMediaContext();
  const [isOpen, toggleOpen] = useCycle(false, true);

  const mainStyle = () => {
    if (media === MOBILE && isOpen) return;

    return {
      backgroundImage: `url('/assets/background-stars.svg')`,
    };
  };

  const variants = {
    hideOutlet: {
      opacity: 0,
      transition: {
        ease: 'easeOut',
        duration: 0,
      },
    },
    showOutlet: {
      opacity: 1,
      transition: {
        ease: 'easeOut',
        delay: 0.3,
        duration: 0.2,
      },
    },
  };

  return (
    <main className={styles.layout} style={mainStyle()}>
      {media === MOBILE ? <MobileNav isOpen={isOpen} toggleOpen={toggleOpen} /> : <Nav />}
      <AnimatePresence initial={false}>
        {!isOpen && (
          <motion.div
            key={!isOpen}
            variants={variants}
            initial={{ opacity: 0 }}
            animate="showOutlet"
            exit="hideOutlet"
            className={styles.outlet}>
            <Outlet />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
