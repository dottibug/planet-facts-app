import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { useMediaContext } from '../context/useMediaContext';
import { useMobileNavContext } from '../context/useMobileNavContext';
import { MOBILE } from '../context/mediaContext';
import MobileNav from '../components/mobile/navigation/MobileNav';
import Nav from '../components/navigation/Nav';
import OutletWrapper from './OutletWrapper';

/**
 * Layout component.
 * Displays the mobile or desktop navigation based on media context.
 */
export default function Layout() {
  const media = useMediaContext();
  const { isMobileNavOpen } = useMobileNavContext();

  return (
    <main className={styles.layout}>
      {media === MOBILE ? <MobileNav /> : <Nav />}
      {!isMobileNavOpen && (
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      )}
    </main>
  );
}
