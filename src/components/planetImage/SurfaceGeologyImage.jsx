import styles from './SurfaceGeologyImage.module.scss';
import { motion } from 'framer-motion';
import { useGeologyImageAnimation } from './hooks/useGeologyImageAnimation';

// Framer Motion animation variants
const geologyImageVariants = {
  defaultAnimation: {},
  showGeologyImage: {
    opacity: 1,
    transition: { delay: 0.1, duration: 0.2, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1, ease: 'easeOut' },
  },
};

export default function SurfaceGeologyImage({ info, images, name, prevInfo }) {
  const { initialGeologyOpacity, animateGeologyImage } = useGeologyImageAnimation(
    prevInfo,
    info
  );

  return (
    <>
      {info === 'surface-geology' && (
        <motion.img
          key="geology"
          variants={geologyImageVariants}
          initial={initialGeologyOpacity}
          animate={animateGeologyImage}
          exit="exit"
          className={styles.surface}
          src={images.geology}
          alt={`Closeup of the surface of ${name}`}
        />
      )}
    </>
  );
}
