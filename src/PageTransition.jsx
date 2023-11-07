import styles from './pageTransition.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { planetData } from '../data/data';

export default function PageTransition({ children }) {
  const { planet } = useParams();
  const [loading, setLoading] = useState(true);
  const [currentPlanetData, setCurrentPlanetData] = useState(null);

  // useEffect(() => {
  //   setLoading(true);

  //   const planetTimeout = setTimeout(() => {
  //     // if (!planet) setCurrentPlanetData('mars');
  //     if (planet)
  //       setCurrentPlanetData(
  //         planetData.find((pl) => pl.name.toLowerCase() === planet.toLowerCase())
  //       );

  //     setLoading(false);
  //   }, 250);

  //   return () => clearTimeout(planetTimeout);
  // }, [planet]);

  // TODO Loading component
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  const pageVariants = {
    pageVisible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 0.2, ease: 'easeOut' },
      filter: 'blur(0px)',
    },
  };

  return (
    <motion.div
      key={planet}
      variants={pageVariants}
      initial={{
        opacity: 0,
        filter: 'blur(1.5px)',
      }}
      animate="pageVisible"
      className={styles.background}>
      {children}
    </motion.div>
  );
}