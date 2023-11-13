import { useContext } from 'react';
import { MediaContext } from './mediaContext';

// Custom hook to use mediaContex
// Error will be thrown if the context is used outside its provider
export const useMediaContext = () => {
  const mediaContext = useContext(MediaContext);
  if (mediaContext === undefined)
    throw new Error('MediaContext was used outside of the MediaProvider.');
  return mediaContext;
};
