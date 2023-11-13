import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import {
  pageTransitionAnimationVariants,
  INITIAL,
  PAGE_VISIBLE,
} from './pageTransitionAnimationVariants';

/**
 * Provides a transition effect when a page is loaded.
 * It uses the `framer-motion` library to animate the transition.
 * @param {ReactNode} children - The child components to be rendered within the page transition.
 * @returns {ReactElement} The motion.div element with the transition effect applied.
 */
export default function PageTransition({ children }) {
  const { planet } = useParams();

  return (
    <motion.div
      key={planet ? `${planet}-transition` : `transition`}
      variants={pageTransitionAnimationVariants}
      initial={INITIAL}
      animate={PAGE_VISIBLE}>
      {children}
    </motion.div>
  );
}
