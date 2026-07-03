import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

export const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: '04379a33-416c-45cb-8d77-71afbf63fa6f'
  })
});
