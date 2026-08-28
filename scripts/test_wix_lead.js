import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: '04379a33-416c-45cb-8d77-71afbf63fa6f',
    siteId: 'e91b7a1a-bc15-47f9-ab29-a8091cf74982'
  })
});

async function testWixLead() {
  console.log('Testing insert on Cotizacionformulario...');
  const testItem = {
    title: 'Lead Prueba ' + new Date().toLocaleTimeString(),
    nombre: 'Lic. Alejandro Silva',
    telefono: '+52 55 1234 5678',
    email: 'alejandro.test@blegam.com.mx',
    estado: 'Ciudad de México',
    empresa: 'Poder Judicial / Gobierno',
    servicio: 'Salas de Juicios Orales',
    mensaje: 'Prueba de conexión automática desde formulario React a Wix CMS',
    origen: 'Test Script',
    fecha: new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })
  };

  try {
    const res = await wixClient.items.insert('Cotizacionformulario', testItem);
    console.log('✅ EXITO: Lead guardado correctamente en Wix CMS (Cotizacionformulario):');
    console.log(res);
  } catch (err) {
    console.error('❌ ERROR AL GUARDAR EN WIX CMS:');
    console.error(err?.message || err);
    if (err?.details?.applicationError?.code === 'WDE0027') {
      console.log('\n⚠️ CAUSA: Falta activar el permiso "Envío de formularios" o "Cualquiera puede crear contenido" en la colección Cotizacionformulario en el Dashboard de Wix.');
    }
  }
}

testWixLead();
