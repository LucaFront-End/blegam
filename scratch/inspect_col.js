import { createClient, OAuthStrategy } from '@wix/sdk';
import { collections } from '@wix/data';

const wixClient = createClient({
  modules: { collections },
  auth: OAuthStrategy({
    clientId: '04379a33-416c-45cb-8d77-71afbf63fa6f',
    siteId: 'e91b7a1a-bc15-47f9-ab29-a8091cf74982'
  })
});

async function inspectCollection() {
  try {
    const tokens = await wixClient.auth.generateVisitorTokens();
    wixClient.auth.setTokens(tokens);

    console.log('Fetching data collection for Cotizacionformulario...');
    const col = await wixClient.collections.getDataCollection('Cotizacionformulario');
    console.log('Collection details:', JSON.stringify(col, null, 2));
  } catch (err) {
    console.error('Error fetching collection:', err?.message || err);
    if (err?.details) console.error('Details:', err.details);
  }
}

inspectCollection();
