import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>NAV BAR HERE</nav>
      <Outlet />
    </>
  );
}
