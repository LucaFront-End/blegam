import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: '04379a33-416c-45cb-8d77-71afbf63fa6f',
    siteId: 'e91b7a1a-bc15-47f9-ab29-a8091cf74982'
  })
});

async function queryItems() {
  try {
    const tokens = await wixClient.auth.generateVisitorTokens();
    wixClient.auth.setTokens(tokens);

    const q = await wixClient.items.query('Cotizacionformulario').find();
    console.log('Total items in Cotizacionformulario:', q.items?.length);
    console.log('Latest inserted item in Wix CMS:');
    console.log(JSON.stringify(q.items[0], null, 2));
  } catch (err) {
    console.error('Query error:', err);
  }
}

queryItems();
