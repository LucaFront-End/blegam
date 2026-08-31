import { createClient, OAuthStrategy } from '@wix/sdk';
import { items, collections } from '@wix/data';

const wixClient = createClient({
  modules: { items, collections },
  auth: OAuthStrategy({
    clientId: '04379a33-416c-45cb-8d77-71afbf63fa6f',
    siteId: 'e91b7a1a-bc15-47f9-ab29-a8091cf74982'
  })
});

async function checkCollections() {
  try {
    console.log('Listing collections...');
    const cols = await wixClient.collections.listCollections();
    console.log('Collections list:', cols);
  } catch (err) {
    console.log('Collections list error:', err?.message || err);
  }
}

checkCollections();
