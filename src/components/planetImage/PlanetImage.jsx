import styles from './PlanetImage.module.scss';
import { useState, useEffect, useRef, useMemo } from 'react';
import OverviewImage from './OverviewImage';
import InternalImage from './InternalImage';
import { AnimatePresence, motion } from 'framer-motion';
import {
  getPlanetImage,
  getPlanetImageAlt,
  getPlanetImageSize,
} from './helpers/planetImageHelpers';
import { useMediaContext } from '../../context/useMediaContext';
import { useParams } from 'react-router-dom';

// Animations
const animations = {
  noAnimation: {},
  imageAnimation: {
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
};

// Initial animation settings
const initial = (prevInfo) => {
  if (prevInfo === 'internal-structure') return { opacity: 0 };
  return { opacity: 1 };
};

export default function PlanetImage({ name, images, info }) {
  const prevInfo = useRef();
  const [animationVariant, setAnimationVariant] = useState('noAnimation');
  const media = useMediaContext();
  const { planet } = useParams();

  // Set animation variant when info changes
  useEffect(() => {
    if (prevInfo.current !== info) {
      const prev = prevInfo.current;
      prevInfo.current = info;

      const isTransitionToOrFromInternal =
        (prev === 'internal-structure' &&
          (info === 'overview' || info === 'surface-geology')) ||
        ((prev === 'overview' || prev === 'surface-geology') &&
          info === 'internal-structure');

      setAnimationVariant(
        isTransitionToOrFromInternal ? 'imageAnimation' : 'noAnimation'
      );
    }
  }, [info]);

  const imageSrc = getPlanetImage(info, images);
  const imageAlt = getPlanetImageAlt(name, info);
  const imageSize = useMemo(() => getPlanetImageSize(media, planet), [media, planet]);

  const ImageComponent = useMemo(() => {
    return info === 'internal-structure' ? InternalImage : OverviewImage;
  }, [info]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={info}
        variants={animations}
        initial={initial(prevInfo.current)}
        animate={animationVariant}
        exit="exit"
        className={styles.planetImageWrapper}>
        <ImageComponent
          info={info}
          prevInfo={prevInfo.current}
          images={images}
          name={name}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          imageSize={imageSize}
        />
      </motion.div>
    </AnimatePresence>
  );
}
