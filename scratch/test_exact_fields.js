import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: '04379a33-416c-45cb-8d77-71afbf63fa6f',
    siteId: 'e91b7a1a-bc15-47f9-ab29-a8091cf74982'
  })
});

async function testInsert() {
  try {
    const tokens = await wixClient.auth.generateVisitorTokens();
    wixClient.auth.setTokens(tokens);

    const item = {
      title: 'contacto@blegam.com.mx',
      nombre: 'Prueba Alejandro Silva',
      telfono: '+52 55 1234 5678',
      telefono: '+52 55 1234 5678',
      servicioDeInteres: ['Salas de Juicios Orales'],
      nombreDeEmpresa: 'Blegam Corp',
      mensaje: 'Prueba de inserción desde formulario',
      estadoDeLaRepublica: 'Ciudad de México'
    };

    console.log('Inserting into Cotizacionformulario with exact schema...');
    const res = await wixClient.items.insert('Cotizacionformulario', item);
    console.log('Insert result:', res);
  } catch (err) {
    console.error('Insert error code:', err?.details?.applicationError?.code);
    console.error('Insert error description:', err?.details?.applicationError?.description);
  }
}

testInsert();
