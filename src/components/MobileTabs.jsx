import styles from './MobileTabs.module.css';
import { tabs } from '../../data/infoTabs';
import MobileTab from './MobileTab';

export default function MobileTabs() {
  return (
    <div className={styles.mobileTabs}>
      {tabs.map((tab, i) => (
        <MobileTab key={tab} tab={tab} index={i} />
      ))}
    </div>
  );
}
