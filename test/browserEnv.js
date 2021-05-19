/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const browserEnv = require('browser-env');
browserEnv();

const fetch = require('node-fetch');
window.fetch = global.fetch = fetch;
