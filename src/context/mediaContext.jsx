import { createContext, useState, useEffect } from 'react';

/**
 * @description Manages media queries
 * It provides a context that holds the current media size (MOBILE, TABLET, LAPTOP, DESKTOP) based on the window's width.
 *
 * @exports MOBILE - Constant representing a mobile device.
 * @exports TABLET - Constant representing a tablet device.
 * @exports LAPTOP - Constant representing a laptop device.
 * @exports DESKTOP - Constant representing a desktop device.
 *
 */

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

/**
 * @description A provider component for the MediaContext. It initializes the media size based on the window's width and updates it whenever the window is resized.
 */
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

  return <MediaContext.Provider value={media}>{children}</MediaContext.Provider>;
}
