import { useContext } from 'react';
import { MobileNavContext } from './mobileNavContext';

export const useMobileNavContext = () => {
  const mobileNavContext = useContext(MobileNavContext);
  if (mobileNavContext === undefined)
    throw new Error('MobileNavContext was used outside of the MobileNavProvider.');
  return mobileNavContext;
};
