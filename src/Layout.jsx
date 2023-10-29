import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

export default function Layout() {
  return (
    <main className={styles.layout}>
      <Nav />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </main>
  );
}
