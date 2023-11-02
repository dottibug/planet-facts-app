import { createContext, useState, useEffect } from 'react';

export const MediaContext = createContext(null);

const MOBILE_MAX = 744;
const TABLET_MIN = 745;
const TABLET_MAX = 1092;
const LAPTOP_MIN = 1093;
const LAPTOP_MAX = 1419;
const DESKTOP_MIN = 1420;

export const MOBILE = 'MOBILE';
export const TABLET = 'TABLET';
export const LAPTOP = 'LAPTOP';
export const DESKTOP = 'DESKTOP';

export default function MediaProvider({ children }) {
  const [media, setMedia] = useState(MOBILE);

  // Get initial media size
  useEffect(() => {
    if (window.innerWidth <= MOBILE_MAX) setMedia(MOBILE);
    else if (window.innerWidth >= TABLET_MIN && window.innerWidth <= TABLET_MAX)
      setMedia(TABLET);
    else if (window.innerWidth >= LAPTOP_MIN && window.innerWidth <= LAPTOP_MAX)
      setMedia(LAPTOP);
    else if (window.innerWidth >= DESKTOP_MIN) setMedia(DESKTOP);
  }, []);

  // Get media size on resize
  useEffect(() => {
    const setMediaSize = () => {
      if (window.innerWidth <= MOBILE_MAX) setMedia(MOBILE);
      else if (window.innerWidth >= TABLET_MIN && window.innerWidth <= TABLET_MAX)
        setMedia(TABLET);
      else if (window.innerWidth >= LAPTOP_MIN && window.innerWidth <= LAPTOP_MAX)
        setMedia(LAPTOP);
      else if (window.innerWidth >= DESKTOP_MIN) setMedia(DESKTOP);
    };

    window.addEventListener('resize', setMediaSize);

    return () => window.removeEventListener('resize', setMediaSize);
  }, []);

  console.log('MEDIA: ', media);

  return <MediaContext.Provider value={media}>{children}</MediaContext.Provider>;
}
