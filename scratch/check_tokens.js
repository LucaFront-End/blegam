import { createClient, OAuthStrategy } from '@wix/sdk';

const wixClient = createClient({
  auth: OAuthStrategy({
    clientId: '04379a33-416c-45cb-8d77-71afbf63fa6f',
    siteId: 'e91b7a1a-bc15-47f9-ab29-a8091cf74982'
  })
});

async function testFetch() {
  console.log('Testing direct Wix fetch / API calls with client auth tokens...');
  try {
    const tokens = await wixClient.auth.getTokens();
    console.log('Tokens:', tokens);
  } catch (err) {
    console.log('Token error:', err);
  }
}

testFetch();
