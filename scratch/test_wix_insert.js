import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: '04379a33-416c-45cb-8d77-71afbf63fa6f',
    siteId: 'e91b7a1a-bc15-47f9-ab29-a8091cf74982'
  })
});

async function run() {
  console.log('Testing Wix Client insertion...');
  try {
    const itemData = {
      title: 'Prueba Test Antigravity - Contacto',
      nombre: 'Test Contacto',
      telefono: '5512345678',
      email: 'test@blegam.com.mx',
      estado: 'Ciudad de México',
      servicio: 'Salas de Juicios Orales',
      mensaje: 'Mensaje de prueba de inserción',
      origen: 'Test Script'
    };

    console.log('Inserting into Cotizacionformulario...');
    const res = await wixClient.items.insert('Cotizacionformulario', itemData);
    console.log('SUCCESS inserting into Cotizacionformulario:', res);
  } catch (err) {
    console.error('ERROR inserting into Cotizacionformulario:', err);
    console.error('Details:', err?.details || err?.message);
  }

  try {
    console.log('Trying to query items from Cotizacionformulario...');
    const q = await wixClient.items.query('Cotizacionformulario').find();
    console.log('Query result items count:', q.items?.length);
    if (q.items?.length) {
      console.log('Sample item fields:', Object.keys(q.items[0]));
      console.log('Sample item:', q.items[0]);
    }
  } catch (qErr) {
    console.error('ERROR querying collection:', qErr);
  }
}

run();
