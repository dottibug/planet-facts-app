import { createContext } from 'react';
import { useCycle } from 'framer-motion';

/**
 * @description Manages the state of the mobile navigation menu.
 * @returns {Array} isMobileNavOpen - Boolean value that represents if mobile navigation is open or closed
 * @returns {function} toggleMobileNav - A function that uses the 'useCycle' hook from 'framer-motion' to toggle between open (true) and closed (false) states
 */

export const MobileNavContext = createContext(null);

export default function MobileNavProvider({ children }) {
  const [isMobileNavOpen, toggleMobileNav] = useCycle(false, true);
  const providerValue = { isMobileNavOpen, toggleMobileNav };

  return (
    <MobileNavContext.Provider value={providerValue}>
      {children}
    </MobileNavContext.Provider>
  );
}
