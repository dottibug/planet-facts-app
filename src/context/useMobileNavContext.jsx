import { useContext } from 'react';
import { MobileNavContext } from './mobileNavContext';

// Custom hook to use mobileNavContext
// Error will be thrown if the context is used outside its provider
export const useMobileNavContext = () => {
  const mobileNavContext = useContext(MobileNavContext);
  if (mobileNavContext === undefined)
    throw new Error('MobileNavContext was used outside of the MobileNavProvider.');
  return mobileNavContext;
};
