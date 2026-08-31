import { wixClient } from './wix';

/**
 * Service to store all form submissions, popup leads, and quote requests
 * directly into Wix CMS Collection: "Cotizacionformulario"
 * (https://manage.wix.com/dashboard/e91b7a1a-bc15-47f9-ab29-a8091cf74982/wix-cms/data/Cotizacionformulario)
 *
 * Exact Wix Schema fields:
 * - title: Correo Electrónico (TEXT)
 * - nombre: Nombre (TEXT)
 * - telfono: Teléfono (TEXT)
 * - servicioDeInteres: Servicio de interes (ARRAY_STRING)
 * - nombreDeEmpresa: Nombre de empresa (TEXT)
 * - mensaje: Mensaje (TEXT)
 * - estadoDeLaRepublica: Estado de la Republica (TEXT)
 */

let authInitialized = false;

async function ensureVisitorAuth() {
  if (authInitialized) return;
  try {
    const tokens = await wixClient.auth.generateVisitorTokens();
    wixClient.auth.setTokens(tokens);
    authInitialized = true;
  } catch (err) {
    console.warn('Wix visitor token generation:', err?.message || err);
  }
}

export async function submitLeadToWix(lead) {
  await ensureVisitorAuth();

  const emailValue = lead.email || lead.correo || '';
  const nameValue = lead.name || lead.nombre || '';
  const phoneValue = lead.phone || lead.telefono || '';
  const estadoValue = lead.estado || lead.state || '';
  const companyValue = lead.company || lead.empresa || '';
  const serviceValue = lead.service || lead.servicio || lead.tipo || lead.documento || 'Salas de Juicios Orales';
  const messageValue = lead.message || lead.mensaje || (lead.documento ? `Solicitó: ${lead.documento}` : '') || (lead.origen ? `Origen: ${lead.origen}` : 'Contacto Web');

  // Exact Wix Schema Payload matching Cotizacionformulario collection
  const itemData = {
    // 1. Exact Wix Collection Schema fields
    title: emailValue || nameValue || 'lead@blegam.com.mx',
    nombre: nameValue,
    telfono: phoneValue,
    servicioDeInteres: Array.isArray(serviceValue) ? serviceValue : [String(serviceValue)],
    nombreDeEmpresa: companyValue,
    mensaje: messageValue,
    estadoDeLaRepublica: estadoValue,

    // 2. Compatibility aliases
    telefono: phoneValue,
    phone: phoneValue,
    email: emailValue,
    correo: emailValue,
    estado: estadoValue,
    empresa: companyValue,
    company: companyValue,
    servicio: serviceValue,
    service: serviceValue,
    origen: lead.origin || lead.origen || (typeof window !== 'undefined' ? window.location.pathname : 'Web'),
    documento: lead.documento || ''
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
