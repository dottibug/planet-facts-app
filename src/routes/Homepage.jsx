import styles from './Homepage.module.scss';
import PageTransition from '../pageTransition';
import HomepageHeader from '../components/homepage/HomepageHeader';
import PlanetOptions from '../components/homepage/PlanetOptions';

// TODO
// tablet media query
// laptop media query
// desktop media query

export default function Homepage() {
  return (
    <PageTransition>
      <div className={styles.homepage}>
        <HomepageHeader />
        <PlanetOptions />
      </div>
    </PageTransition>
  );
}
