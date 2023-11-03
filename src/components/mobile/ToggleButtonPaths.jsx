import { motion } from 'framer-motion';

const bottomLineVariants = {
  closed: { d: 'M 2 2.5 L 20 2.5' },
  open: { d: 'M 3 16.5 L 17 2.5' },
};

const middleLineVariants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};

const topLineVariants = {
  closed: { d: 'M 2 16.346 L 20 16.346' },
  open: { d: 'M 3 2.5 L 17 16.346' },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#ffffff"
    strokeLinecap="round"
    {...props}
  />
);

export default function ToggleButtonPaths() {
  return (
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path variants={bottomLineVariants} />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={middleLineVariants}
        transition={{ duration: 0.1 }}
      />
      <Path variants={topLineVariants} />
    </svg>
  );
}
