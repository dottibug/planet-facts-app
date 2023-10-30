import { createContext, useState, useEffect, useContext } from 'react';

export const MediaContext = createContext(null);

const DESKTOP_SIZE = 1280;
const TABLET_SIZE = 912;
const MOBILE_SIZE = 412;

export const DESKTOP = 'DESKTOP';
export const TABLET = 'TABLET';
export const MOBILE = 'MOBILE';

export default function MediaProvider({ children }) {
  const [media, setMedia] = useState(DESKTOP);

  // Get initial media size
  useEffect(() => {
    if (window.innerWidth >= DESKTOP_SIZE) setMedia(DESKTOP);
    else if (window.innerWidth >= TABLET_SIZE) setMedia(TABLET);
    else setMedia(MOBILE);
  }, []);

  // Get media size on resize
  useEffect(() => {
    const setMediaSize = () => {
      if (window.innerWidth >= DESKTOP_SIZE) setMedia(DESKTOP);
      else if (window.innerWidth >= TABLET_SIZE && window.innerWidth < DESKTOP_SIZE)
        setMedia(TABLET);
      else setMedia(MOBILE);
    };

    window.addEventListener('resize', setMediaSize);

    return () => window.removeEventListener('resize', setMediaSize);
  }, []);

  return <MediaContext.Provider value={media}>{children}</MediaContext.Provider>;
}
