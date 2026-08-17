import { wixClient } from './wix';

/**
 * Service to store all form submissions, popup leads, and quote requests
 * directly into Wix CMS Collection: "Cotizacionformulario"
 * (https://manage.wix.com/dashboard/e91b7a1a-bc15-47f9-ab29-a8091cf74982/wix-cms/data/Cotizacionformulario)
 */

export async function submitLeadToWix(lead) {
  const timestamp = new Date().toISOString();
  const readableDate = new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' });

  // Map all possible variations of field keys to match Wix CMS collection schema seamlessly
  const itemData = {
    // Title / Main reference field
    title: `${lead.name || lead.nombre || lead.email || 'Nuevo Lead'} - ${lead.service || lead.servicio || lead.tipo || 'Cotización'}`,
    
    // Core Contact Fields (Both Spanish and English variations)
    nombre: lead.name || lead.nombre || '',
    name: lead.name || lead.nombre || '',
    
    telefono: lead.phone || lead.telefono || '',
    phone: lead.phone || lead.telefono || '',
    
    email: lead.email || lead.correo || '',
    correo: lead.email || lead.correo || '',
    
    estado: lead.estado || lead.state || '',
    state: lead.estado || lead.state || '',
    
    empresa: lead.company || lead.empresa || '',
    company: lead.company || lead.empresa || '',
    
    servicio: lead.service || lead.servicio || lead.tipo || lead.documento || '',
    service: lead.service || lead.servicio || lead.tipo || lead.documento || '',
    
    mensaje: lead.message || lead.mensaje || lead.comentario || '',
    message: lead.message || lead.mensaje || lead.comentario || '',
    
    origen: lead.origin || lead.origen || (typeof window !== 'undefined' ? window.location.pathname : 'Web'),
    origin: lead.origin || lead.origen || (typeof window !== 'undefined' ? window.location.pathname : 'Web'),
    
    documento: lead.documento || lead.document || '',
    fecha: readableDate,
    fechaIso: timestamp
  };

  try {
    // Primary collection target: Cotizacionformulario
    const result = await wixClient.items.insert('Cotizacionformulario', itemData);
    console.log('Lead successfully saved to Wix CMS (Cotizacionformulario):', result);
    return { success: true, result };
  } catch (err) {
    console.warn('First attempt to save to Cotizacionformulario yielded:', err?.message || err);
    
    // Fallback attempts with alternate casing in case collection ID has distinct case in Wix
    const collectionsToTry = ['CotizacionFormulario', 'cotizacionformulario', 'cotizaciones'];
    for (const col of collectionsToTry) {
      try {
        const altResult = await wixClient.items.insert(col, itemData);
        console.log(`Lead successfully saved to Wix CMS (${col}):`, altResult);
        return { success: true, result: altResult };
      } catch {
        // continue trying
      }
    }

    console.error('All Wix CMS insertion attempts completed. Error details:', err);
    return { success: false, error: err };
  }
}
