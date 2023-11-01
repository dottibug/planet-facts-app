export const getPlanetInfo = (info, planet) => {
  if (info === 'overview') return planet.overview.content;
  if (info === 'internal-structure') return planet.structure.content;
  if (info === 'surface-geology') return planet.geology.content;
};
