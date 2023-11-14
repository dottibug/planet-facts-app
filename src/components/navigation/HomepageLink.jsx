import { NavLink } from 'react-router-dom';

export default function HomepageLink() {
  return (
    <NavLink to="/" style={{ textDecoration: 'none' }}>
      <p className="siteTitle">The Planets</p>
    </NavLink>
  );
}
