import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { useMediaContext } from './context/useMediaContext';
import { MOBILE } from './context/mediaContext';
import MobileNav from './components/MobileNav';

export default function Layout() {
  const media = useMediaContext();

  console.log('media: ', media);

  return (
    <main className={styles.layout}>
      {media === MOBILE ? <MobileNav /> : <Nav />}
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </main>
  );
}
