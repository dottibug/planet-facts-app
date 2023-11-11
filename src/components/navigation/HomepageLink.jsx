import { NavLink } from 'react-router-dom';

export default function HomepageLink() {
  return (
    <NavLink to="/" style={{ textDecoration: 'none' }}>
      <h1 className="siteTitle">The Planets</h1>
    </NavLink>
  );
}
