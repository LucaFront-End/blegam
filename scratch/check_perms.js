import { createClient, OAuthStrategy } from '@wix/sdk';
import { permissions } from '@wix/data';

const wixClient = createClient({
  modules: { permissions },
  auth: OAuthStrategy({
    clientId: '04379a33-416c-45cb-8d77-71afbf63fa6f',
    siteId: 'e91b7a1a-bc15-47f9-ab29-a8091cf74982'
  })
});

async function checkPermissions() {
  try {
    const tokens = await wixClient.auth.generateVisitorTokens();
    wixClient.auth.setTokens(tokens);

    console.log('Checking permissions for Cotizacionformulario...');
    const perms = await wixClient.permissions.getPermissions({ dataCollectionId: 'Cotizacionformulario' });
    console.log('Permissions:', JSON.stringify(perms, null, 2));
  } catch (err) {
    console.error('Error checking permissions:', err?.message || err);
    if (err?.details) console.error('Details:', err.details);
  }
}

checkPermissions();
