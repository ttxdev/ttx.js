import { TTXApi, Configuration } from '@ttxdev/ttx.js';

const client = new TTXApi(
  new Configuration({
    basePath: 'https://api.ttx.gg',
    headers: {
      'Authorization': 'Bearer TOKEN'
    }
  })
);

const hub = client.createHub('events');
// List of notifications here
// https://github.com/ttxdev/TTX/tree/main/src/TTX/Notifications
hub.on('UpdateCreatorValue', console.log);
hub.start();
