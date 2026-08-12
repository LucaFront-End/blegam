import { wixClient } from './wix';

// Map Wix CMS item fields to the schema used by the application
function mapWixItem(item, type) {
  // Robust helper to check multiple possible field name variations from Wix database schema
  const getField = (obj, ...keys) => {
    for (const k of keys) {
      if (obj[k] !== undefined && obj[k] !== null) return obj[k];
    }
    // Also try case-insensitive matching
    const entries = Object.entries(obj);
    for (const k of keys) {
      const match = entries.find(([key]) => key.toLowerCase().replace(/[^a-z0-9]/g, '') === k.toLowerCase().replace(/[^a-z0-9]/g, ''));
      if (match) return match[1];
    }
    return '';
  };

  return {
    type,
    frase: getField(item, 'frase', 'title', 'fraseDeCabecera'),
    slug: getField(item, 'slug'),
    titulo: getField(item, 'tituloDePgina', 'tituloDePagina', 'titulo', 'title'),
    excerpt: getField(item, 'excerptDEpgina', 'excerptDePagina', 'excerptDepagina', 'excerpt', 'descripcion'),
    seoTitle: getField(item, 'tituloDeSeo', 'seoTitle', 'title'),
    seoDescription: getField(item, 'metadescripcin', 'metadescripcion', 'metaDescripcion', 'seoDescription', 'description'),
    whatsappUrl: getField(item, 'whatsappUrl', 'whatsapp_url', 'whatsapp'),
    ciudad: getField(item, 'ciudad'),
    estado: getField(item, 'estado'),
    palabra: getField(item, 'palabra'),
    id: item._id
  };
}

/**
 * Fetch a single landing by its slug from Wix CMS.
 * Returns the landing object or null if not found.
 */
export async function fetchLandingBySlug(slug) {
  if (!slug) return null;
  
  try {
    // 1. Query "Landingprincipalciudades" collection
    const homeResult = await wixClient.items
      .query('Landingprincipalciudades')
      .eq('slug', slug)
      .limit(1)
      .find();
      
    if (homeResult.items && homeResult.items.length > 0) {
      return mapWixItem(homeResult.items[0], 'home');
    }
    
    // 2. Query "LandingdeSalasdeJuiciosOrales" collection
    const salasResult = await wixClient.items
      .query('LandingdeSalasdeJuiciosOrales')
      .eq('slug', slug)
      .limit(1)
      .find();
      
    if (salasResult.items && salasResult.items.length > 0) {
      return mapWixItem(salasResult.items[0], 'salas');
    }

    // 3. Query "LandingControldeAcceso" collection
    const accesosResult = await wixClient.items
      .query('LandingControldeAcceso')
      .eq('slug', slug)
      .limit(1)
      .find();

    if (accesosResult.items && accesosResult.items.length > 0) {
      return mapWixItem(accesosResult.items[0], 'accesos');
    }
  } catch (err) {
    console.error('Error fetching landing from Wix:', err);
  }
  
  return null;
}

/**
 * Fetch all landings, sorted alphabetically by state and city from Wix CMS.
 */
export async function fetchAllLandings() {
  try {
    // Fetch all items from all 3 collections (Wix query defaults limit to 50, max is 1000)
    const homeResult = await wixClient.items.query('Landingprincipalciudades').limit(1000).find();
    const salasResult = await wixClient.items.query('LandingdeSalasdeJuiciosOrales').limit(1000).find();
    const accesosResult = await wixClient.items.query('LandingControldeAcceso').limit(1000).find();
    
    const homes = (homeResult.items || []).map(item => mapWixItem(item, 'home'));
    const salas = (salasResult.items || []).map(item => mapWixItem(item, 'salas'));
    const accesos = (accesosResult.items || []).map(item => mapWixItem(item, 'accesos'));
    
    return [...homes, ...salas, ...accesos].sort((a, b) => {
      const stateCompare = (a.estado || '').localeCompare(b.estado || '');
      if (stateCompare !== 0) return stateCompare;
      return (a.ciudad || '').localeCompare(b.ciudad || '');
    });
  } catch (err) {
    console.error('Error fetching all landings from Wix:', err);
    return [];
  }
}
