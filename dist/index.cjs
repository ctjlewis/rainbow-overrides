#!/usr/bin/env node
'use strict';

const { NODE_ENV } = process.env;
if (NODE_ENV === 'production')
  module.exports = require('./rainbow-overrides.production.min.cjs');
else
  module.exports = require('./rainbow-overrides.development.cjs');
