import styles from './Tab.module.scss';
import { useParams, NavLink } from 'react-router-dom';
import { planetColors } from '../../../data/planetColors';
import { OVERVIEW } from '../../../data/infoSlugs';

export default function Tab({ tab, index }) {
  const { planet } = useParams();
  const tabNumber = String(index + 1).padStart(2, 0);
  const tabSlug = tab.toLowerCase().split(' ').join('-');

  // isActive comes from React Router NavLink component
  // Gives us the state of the link (active, pending, etc)
  const tabClasses = (isActive) =>
    isActive ? `${styles.tab} ${styles.active}` : styles.tab;

  const tabStyle = (isActive) => {
    if (!isActive) return {};
    return { backgroundColor: planetColors[planet] };
  };

  return (
    <NavLink
      to={tabSlug === OVERVIEW ? `/${planet}` : tabSlug}
      className={({ isActive }) => tabClasses(isActive)}
      style={({ isActive }) => tabStyle(isActive)}
      end>
      <span className={`headingThree ${styles.tabNum}`}>{tabNumber}</span>
      <span className={`headingThree ${styles.tabName}`}>{tab}</span>
    </NavLink>
  );
}
