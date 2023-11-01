import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useMediaContext } from '../context/useMediaContext';
import { MOBILE } from '../context/mediaContext';
import Nav from '../components/navigation/Nav';
import MobileNav from '../components/mobile/MobileNav';

export default function Layout() {
  const media = useMediaContext();
  const [isOpen, setIsOpen] = useState(false);

  const mainStyle = () => {
    if (media === MOBILE && isOpen) return;

    return {
      backgroundImage: `url('/assets/background-stars.svg')`,
    };
  };

  return (
    <main className={styles.layout} style={mainStyle()}>
      {media === MOBILE ? <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} /> : <Nav />}
      {!isOpen && (
        <div className={styles.outlet}>
          <Outlet />
        </div>
      )}
    </main>
  );
}
