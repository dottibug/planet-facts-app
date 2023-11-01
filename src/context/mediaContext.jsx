import { createContext, useState, useEffect } from 'react';

export const MediaContext = createContext(null);

// TODO another size LAPTOP starting at 1062;
// ORIGINAL
// const DESKTOP_SIZE = 1280;
// const TABLET_SIZE = 912;
// const MOBILE_SIZE = 412;

// TEST

// NOTE: fix wiki source spacing on tablet size
const DESKTOP_SIZE = 1420;
const LAPTOP_SIZE = 1093;
const TABLET_SIZE = 745;
const MOBILE_SIZE = 744;

export const DESKTOP = 'DESKTOP';
export const LAPTOP = 'LAPTOP';
export const TABLET = 'TABLET';
export const MOBILE = 'MOBILE';

export default function MediaProvider({ children }) {
  const [media, setMedia] = useState(DESKTOP);

  // Get initial media size
  useEffect(() => {
    if (window.innerWidth < TABLET_SIZE) setMedia(MOBILE);
    else if (window.innerWidth >= TABLET_SIZE && window.innerWidth < LAPTOP_SIZE)
      setMedia(TABLET);
    else if (window.innerWidth >= LAPTOP_SIZE && window.innerWidth < DESKTOP_SIZE)
      setMedia(LAPTOP);
    else if (window.innerWidth >= DESKTOP_SIZE) setMedia(DESKTOP);
  }, []);

  // Get media size on resize
  useEffect(() => {
    const setMediaSize = () => {
      if (window.innerWidth < TABLET_SIZE) setMedia(MOBILE);
      else if (window.innerWidth >= TABLET_SIZE && window.innerWidth < LAPTOP_SIZE)
        setMedia(TABLET);
      else if (window.innerWidth >= LAPTOP_SIZE && window.innerWidth < DESKTOP_SIZE)
        setMedia(LAPTOP);
      else if (window.innerWidth >= DESKTOP_SIZE) setMedia(DESKTOP);
    };

    window.addEventListener('resize', setMediaSize);

    return () => window.removeEventListener('resize', setMediaSize);
  }, []);

  console.log('MEDIA: ', media);

  return <MediaContext.Provider value={media}>{children}</MediaContext.Provider>;
}
