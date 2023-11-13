import styles from './ErrorPage.module.scss';
import { useRouteError } from 'react-router-dom';
import { PLANET_NOT_FOUND_ERROR } from '../../data/errorTypes';
import { INFO_NOT_FOUND_ERROR } from '../../data/errorTypes';
import PlanetNotFoundError from '../components/errors/PlanetNotFoundError';
import InfoNotFoundError from '../components/errors/InfoNotFoundError';

export default function ErrorPage() {
  const error = useRouteError();
  const { type, message } = error;

  return (
    <main className={styles.errorPage}>
      <h1 className={`body ${styles.errorHeading}`}>{message}</h1>
      {type === PLANET_NOT_FOUND_ERROR && <PlanetNotFoundError />}
      {type === INFO_NOT_FOUND_ERROR && <InfoNotFoundError />}
    </main>
  );
}
