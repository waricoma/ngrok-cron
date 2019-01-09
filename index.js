'use strict';

const argparse = require('argparse').ArgumentParser;
const ngrok = require('ngrok');
const delay = require('delay');
const request = require('request');
const consola = require('consola');

const parser = new argparse({
  version: '0.0.1',
  addHelp: true,
  description: 'ngrok-cron',
  argumentDefault: {flip: true}
});
parser.addArgument(['--proto'], {required: true, type: 'string', help: 'proto for ngrok'});
parser.addArgument(['--addr'], {required: true, type: 'string', help: 'addr for ngrok'});
parser.addArgument(['--endpoint'], {required: true, type: 'string', help: 'send ngrok url to endpoint'});
parser.addArgument(['--delay'], {required: true, type: 'int', help: 'ms for delay for ngrok disconnect and connect'});
parser.addArgument(['--auth'], {type: 'string', help: 'proto for ngrok'});
parser.addArgument(['--subdomain'], {type: 'string', help: 'addr for subdomain'});
parser.addArgument(['--authtoken'], {type: 'string', help: 'proto for authtoken'});
parser.addArgument(['--region'], {type: 'string', help: 'addr for region'});
parser.addArgument(['--configPath'], {type: 'string', help: 'proto for configPath'});
const args = parser.parseArgs();

(async () => {
  const url = await ngrok.connect(3000);
  await consola.start(url);
  await request.get({
    url: args.endpoint,
    qs: {ngrok: url}
  }, err => { if (err) throw err; });
  await delay(parseFloat(args.delay));
  await ngrok.disconnect(url);
  await process.exit(1);
})();
