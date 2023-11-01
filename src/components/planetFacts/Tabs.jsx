import styles from './Tabs.module.scss';
import Tab from './Tab';
import { tabs } from '../../../data/infoTabs';

export default function Tabs() {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab, i) => (
        <Tab key={tab} tab={tab} index={i} />
      ))}
    </div>
  );
}
