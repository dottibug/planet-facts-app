/**
 * This function retrieves the content for specific info tab of a particular planet
 *
 * @param {string} info - The info to retrieve about the planet. It can be one of the following: 'overview', 'internal-structure', or 'surface-geology'.
 *
 * @param {object} planet - An object that contains the content about a specific planet. The content should correspond to the info tabs 'overview', 'structure', and 'geology'
 *
 * @returns {string} - Returns the content of the specified info tab for the planet. If the 'info' parameter does not match any of the expected values, the function will return an empty string.
 */
export const getPlanetInfo = (info, planet) => {
  if (info === 'overview') return planet.overview.content;
  if (info === 'internal-structure') return planet.structure.content;
  if (info === 'surface-geology') return planet.geology.content;
  return '';
};
