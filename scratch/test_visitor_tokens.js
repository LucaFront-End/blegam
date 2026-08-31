import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: '04379a33-416c-45cb-8d77-71afbf63fa6f',
    siteId: 'e91b7a1a-bc15-47f9-ab29-a8091cf74982'
  })
});

async function testVisitorInsert() {
  try {
    console.log('Generating visitor tokens...');
    const visitorTokens = await wixClient.auth.generateVisitorTokens();
    console.log('Generated visitor tokens:', visitorTokens);
    wixClient.auth.setTokens(visitorTokens);

    const itemData = {
      title: 'Prueba Visitor Token - Contacto',
      nombre: 'Alejandro Silva',
      telefono: '5512345678',
      email: 'alejandro@blegam.com.mx',
      estado: 'CDMX',
      servicio: 'Salas de Juicios Orales',
      mensaje: 'Prueba de lead con visitor tokens',
      origen: 'Script Test'
    };

    console.log('Attempting insert with visitor token into Cotizacionformulario...');
    const result = await wixClient.items.insert('Cotizacionformulario', itemData);
    console.log('SUCCESS INSERT:', result);
  } catch (err) {
    console.error('ERROR inserting with visitor token:', err);
    console.error('Details:', err?.details);
  }
}

testVisitorInsert();
