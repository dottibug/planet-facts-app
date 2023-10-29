import styles from './Tabs.module.css';
import Tab from './Tab';

const tabs = ['Overview', 'Internal Structure', 'Surface Geology'];

export default function Tabs() {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab, i) => (
        <Tab key={tab} tab={tab} index={i} />
      ))}
    </div>
  );
}
