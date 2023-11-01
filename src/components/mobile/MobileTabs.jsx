import styles from './MobileTabs.module.scss';
import MobileTab from './MobileTab';
import { tabs } from '../../../data/infoTabs';

export default function MobileTabs() {
  return (
    <div className={styles.mobileTabs}>
      {tabs.map((tab, i) => (
        <MobileTab key={tab} tab={tab} index={i} />
      ))}
    </div>
  );
}
