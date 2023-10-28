import { useParams } from 'react-router-dom';
import { planetData } from '../../data/data';

export default function Planet() {
  const { planet } = useParams();

  // NOTE temp getting data from object, but will be fetched from supabase
  const currentPlanet = planetData.find((data) => data.name.toLowerCase() === planet);

  console.log('CURRENT PLANET: ', currentPlanet);

  return (
    <div>
      <h1>{planet}</h1>
      <img src="./assets/planet-mercury.svg" alt="mercury" />
    </div>
  );
}
