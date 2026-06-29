import landingsData from '../data/landings.json';

// Simple in-memory list cached/loaded
const landings = landingsData || [];

/**
 * Fetch a single landing by its slug.
 * Returns the landing object or null if not found.
 */
export async function fetchLandingBySlug(slug) {
  if (!slug) return null;
  const match = landings.find(
    (l) => (l.slug || '').toLowerCase() === (slug || '').toLowerCase()
  );
  return match || null;
}

/**
 * Fetch all landings, sorted alphabetically by state and city.
 */
export async function fetchAllLandings() {
  return [...landings].sort((a, b) => {
    const stateCompare = (a.estado || '').localeCompare(b.estado || '');
    if (stateCompare !== 0) return stateCompare;
    return (a.ciudad || '').localeCompare(b.ciudad || '');
  });
}
