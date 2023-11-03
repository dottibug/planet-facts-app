import styles from './MobileNavLink.module.scss';
import { NavLink } from 'react-router-dom';
import BulletCircle from './BulletCircle';
import { planetColors } from '../../../data/planetColors';
import ArrowIcon from './ArrowIcon';
import { AnimatePresence, motion } from 'framer-motion';

export default function MobileNavLink({ planet, toggleOpen }) {
  // HANDLERS
  const handleClickMenu = () => toggleOpen();

  const variants = {
    open: {
      opacity: 1,
      transition: {
        ease: 'easeOut',
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

  return (
    <AnimatePresence>
      <motion.li
        key="planet"
        initial={{ opacity: 0 }}
        variants={variants}
        animate="open"
        exit="close"
        className={styles.mobileNavListItem}>
        <NavLink
          to={`/${planet}`}
          onClick={handleClickMenu}
          className={styles.mobileNavLink}>
          <div className={styles.planet}>
            <BulletCircle color={planetColors[planet]} />
            <p className={styles.name}>{planet}</p>
          </div>
        </NavLink>
        <ArrowIcon planet={planet} />
      </motion.li>
    </AnimatePresence>
  );
}
