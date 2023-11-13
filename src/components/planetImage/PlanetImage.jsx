import styles from './PlanetImage.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaContext } from '../../context/useMediaContext';
import {
  getPlanetImage,
  getPlanetImageAlt,
  getPlanetImageSize,
} from './helpers/planetImageHelpers';
import { usePlanetImageAnimation } from './hooks/usePlanetImageAnimation';
import {
  planetImageAnimationVariants,
  EXIT,
} from './animationVariants/planetImageAnimationVariants';
import { getInitialSettings } from './helpers/getInitialSettings';
import { INTERNAL_STRUCTURE } from '../../../data/infoSlugs';
import OverviewImage from './OverviewImage';
import InternalImage from './InternalImage';

/**
 * @param {string} name - The name of the planet
 * @param {Object} images - Object containing images of the planet for different info tabs
 * @param {string} info - The current info tab of the planet ('overview', 'internal-structure', 'surface-geology')
 */
export default function PlanetImage({ name, images, info }) {
  // Keeps track of the previous info tab
  const prevInfo = useRef();
  const { planet } = useParams();

  const media = useMediaContext();
  const planetImageAnimation = usePlanetImageAnimation(info, prevInfo);

  const imageSrc = getPlanetImage(info, images);
  const imageAlt = getPlanetImageAlt(name, info);
  const imageSize = useMemo(() => getPlanetImageSize(media, planet), [media, planet]);

  const ImageComponent = useMemo(() => {
    return info === INTERNAL_STRUCTURE ? InternalImage : OverviewImage;
  }, [info]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={info}
        variants={planetImageAnimationVariants}
        initial={getInitialSettings(prevInfo.current)}
        animate={planetImageAnimation}
        exit={EXIT}
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
