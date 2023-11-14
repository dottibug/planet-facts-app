import styles from '../../pages/ErrorPage.module.scss';
import { NavLink, useParams } from 'react-router-dom';
import { capitalizePlanet } from '../../helpers/capitalizePlanet';

const CHECK_OUT = `Check out our `;
const PAGE = ` page instead.`;

export default function InfoNotFoundError() {
  const { planet } = useParams();
  const planetFormatted = capitalizePlanet(planet);

  return (
    <p className={styles.errorMessage}>
      <span className={`body ${styles.errorSpan}`}>{CHECK_OUT}</span>
      <NavLink to={`/${planet}`} className={`headingThree ${styles.homeLink}`}>
        {`${planetFormatted} overview`}
      </NavLink>
      <span className={`body ${styles.errorSpan}`}>{PAGE}</span>
    </p>
  );
}
