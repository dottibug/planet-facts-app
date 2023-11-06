import { createContext, useState, useEffect } from 'react';
import { useCycle } from 'framer-motion';

export const MobileNavContext = createContext(null);

export default function MobileNavProvider({ children }) {
  const [isMobileNavOpen, toggleMobileNav] = useCycle(false, true);

  const providerValue = { isMobileNavOpen, toggleMobileNav: () => toggleMobileNav() };

  return (
    <MobileNavContext.Provider value={providerValue}>
      {children}
    </MobileNavContext.Provider>
  );
}
