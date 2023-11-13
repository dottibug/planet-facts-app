import styles from './SurfaceGeologyImage.module.scss';
import { motion } from 'framer-motion';
import { useGeologyImageAnimation } from './hooks/useGeologyImageAnimation';
import { SURFACE_GEOLOGY } from '../../../data/infoSlugs';
import { geologyImageVariants, EXIT } from './animationVariants/geologyAnimationVariants';

export default function SurfaceGeologyImage({ info, images, name, prevInfo }) {
  const { initialGeologyOpacity, animateGeologyImage } = useGeologyImageAnimation(
    prevInfo,
    info
  );

  return (
    <>
      {info === SURFACE_GEOLOGY && (
        <motion.img
          key="geology"
          variants={geologyImageVariants}
          initial={initialGeologyOpacity}
          animate={animateGeologyImage}
          exit={EXIT}
          className={styles.surface}
          src={images.geology}
          alt={`Closeup of the surface of ${name}`}
        />
      )}
    </>
  );
}
