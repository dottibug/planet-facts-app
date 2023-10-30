import styles from './Tab.module.css';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const planetColors = {
  mercury: '#419EBB',
  venus: '#EDA249',
  earth: '#6D2ED5',
  mars: '#D14C32',
  jupiter: '#D83A34',
  saturn: '#CD5120',
  uranus: '#1EC1A2',
  neptune: '#2D68F0',
};

export default function Tab({ tab, index }) {
  const { planet } = useParams();

  const tabNumber = String(index + 1).padStart(2, 0);
  const tabSlug = tab.toLowerCase().split(' ').join('-');

  //   isActive comes from React Router NavLink component, which gives us the state of the link (active, pending, etc)
  const tabClasses = (isActive) =>
    isActive ? `${styles.tab} ${styles.active}` : styles.tab;

  const tabStyle = (isActive) => {
    if (!isActive) return {};
    return { backgroundColor: planetColors[planet] };
  };

  return (
    <NavLink
      to={tabSlug === 'overview' ? `/${planet}` : tabSlug}
      className={({ isActive }) => tabClasses(isActive)}
      style={({ isActive }) => tabStyle(isActive)}
      end>
      <span className={`headingThree ${styles.tabNum}`}>{tabNumber}</span>
      <span className={`headingThree ${styles.tabName}`}>{tab}</span>
    </NavLink>
  );
}
