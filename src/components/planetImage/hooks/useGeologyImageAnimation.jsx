import { useMemo } from 'react';

export const useGeologyImageAnimation = (prevInfo, info) => {
  const initialGeologyOpacity = useMemo(() => {
    if (prevInfo === 'surface-geology' && info === 'overview') return { opacity: 1 };
    if (prevInfo === 'overview' && info === 'surface-geology') return { opacity: 0 };
  }, [prevInfo, info]);

  const animateGeologyImage = useMemo(() => {
    if (prevInfo === 'overview' && info === 'surface-geology') return 'showGeologyImage';
    return {};
  }, [prevInfo, info]);

  return { initialGeologyOpacity, animateGeologyImage };
};
