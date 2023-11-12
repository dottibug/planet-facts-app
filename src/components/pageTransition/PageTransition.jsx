import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

// Animation states for the page transition
const pageVariants = {
  initial: {
    opacity: 0,
    filter: 'blur(1.5px)',
  },
  pageVisible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.2, ease: 'easeOut' },
    filter: 'blur(0px)',
  },
};

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
      variants={pageVariants}
      initial="initial"
      animate="pageVisible">
      {children}
    </motion.div>
  );
}
