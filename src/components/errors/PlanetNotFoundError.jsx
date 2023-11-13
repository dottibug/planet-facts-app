import styles from '../../pages/ErrorPage.module.scss';
import { NavLink } from 'react-router-dom';

const RETURN_TO = `Return to the `;
const HOMEPAGE = 'homepage';
const SELECT_PLANET = ` to select a planet in our solar system.`;

export default function PlanetNotFoundError() {
  return (
    <p className={styles.errorMessage}>
      <span className={`body ${styles.errorSpan}`}>{RETURN_TO}</span>
      <NavLink to="/" className={`headingThree ${styles.homeLink}`}>
        {HOMEPAGE}
      </NavLink>
      <span className={`body ${styles.errorSpan}`}>{SELECT_PLANET}</span>
    </p>
  );
}
