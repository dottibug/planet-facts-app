import styles from './MobileTab.module.scss';
import { useParams, NavLink } from 'react-router-dom';
import { planetColors } from '../../../data/planetColors';

export default function MobileTab({ tab }) {
  const { planet } = useParams();
  const tabSlug = tab.toLowerCase().split(' ').join('-');
  const tabName = tab.split(' ')[0];

  //   isActive comes from React Router NavLink component, which gives us the state of the link (active, pending, etc)
  const tabClasses = (isActive) =>
    isActive ? `${styles.tab} ${styles.active}` : styles.tab;

  const tabStyle = (isActive) => {
    if (!isActive) return {};
    return { borderBottomColor: planetColors[planet] };
  };

  return (
    <div className={styles.tabWrapper}>
      <NavLink
        to={tabSlug === 'overview' ? `/${planet}` : tabSlug}
        className={({ isActive }) => tabClasses(isActive)}
        style={({ isActive }) => tabStyle(isActive)}
        end>
        <span className={`headingThree ${styles.tabName}`}>{tabName}</span>
      </NavLink>
    </div>
  );
}
