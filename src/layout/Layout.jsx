import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { useMediaContext } from '../context/useMediaContext';
import { MOBILE } from '../context/mediaContext';
import Nav from '../components/navigation/Nav';
import MobileNav from '../components/mobile/MobileNav';
import OutletWrapper from './OutletWrapper';
import { useMobileNavContext } from '../context/useMobileNavContext';

export default function Layout() {
  const media = useMediaContext();
  const { isMobileNavOpen } = useMobileNavContext();

  const mainStyle = () => {
    if (media === MOBILE && isMobileNavOpen) return;

    return {
      backgroundImage: `url('/assets/background-stars.svg')`,
    };
  };

  return (
    <main className={styles.layout} style={mainStyle()}>
      {media === MOBILE ? <MobileNav /> : <Nav />}
      {!isMobileNavOpen && (
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      )}
    </main>
  );
}
