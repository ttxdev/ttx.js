import { TTXApi, Configuration } from '@ttxdev/ttx.js';

const client = new TTXApi(
  new Configuration({
    basePath: 'https://api.ttx.gg',
    headers: {
      'Authorization': 'Bearer TOKEN'
    }
  })
);

const creators = await client.getCreators();
console.log(creators);
